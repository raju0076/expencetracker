import express from 'express';
import Expense from '../models/Expense.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, async (req, res) => {
  try {
    const { page = 1, limit = 50, category, startDate, endDate } = req.query;

    const filter = { user: req.user._id };

    if (category && category !== 'all') {
      filter.category = category;
    }

    if (startDate && endDate) {
      filter.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const expenses = await Expense.find(filter)
      .sort({ date: -1, createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean();

    const total = await Expense.countDocuments(filter);

    res.json({
      expenses,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Get expenses error:', error);
    res.status(500).json({ message: 'Server error fetching expenses' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;

    const expense = new Expense({
      user: req.user._id,
      description,
      amount,
      category,
      date: new Date(date)
    });

    await expense.save();
    res.status(201).json(expense);
  } catch (error) {
    console.error('Create expense error:', error);
    res.status(500).json({ message: 'Server error creating expense' });
  }
});

router.put('/:id', auth, async (req, res) => {
  try {
    const { description, amount, category, date } = req.body;

    const expense = await Expense.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    expense.description = description;
    expense.amount = amount;
    expense.category = category;
    expense.date = new Date(date);

    await expense.save();
    res.json(expense);
  } catch (error) {
    console.error('Update expense error:', error);
    res.status(500).json({ message: 'Server error updating expense' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
    });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Delete expense error:', error);
    res.status(500).json({ message: 'Server error deleting expense' });
  }
});

router.get('/stats', auth, async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const matchStage = { user: req.user._id };

    if (startDate && endDate) {
      matchStage.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate)
      };
    }

    const stats = await Expense.aggregate([
      { $match: matchStage },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
          count: { $sum: 1 },
          avgAmount: { $avg: '$amount' }
        }
      },
      { $sort: { total: -1 } }
    ]);

    const totalExpenses = await Expense.aggregate([
      { $match: matchStage },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
          totalCount: { $sum: 1 }
        }
      }
    ]);

    res.json({
      categoryStats: stats,
      overview: totalExpenses[0] || { totalAmount: 0, totalCount: 0 }
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Server error fetching statistics' });
  }
});

export default router;
