import { ArrowRight } from "lucide-react";
import React from "react";

export const Div1 = () => {
  return (
    <div className="relative flex flex-col items-center mt-16 pt-24 min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800 hover:text-purple-600">
        Tips for Reducing Expenses:
      </h1>

      <div className="w-3/4 mt-10 bg-orange-100 h-96 z-10 sticky top-24 flex flex-col justify-center p-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h1 className="text-4xl mb-4">Transportation:</h1>
        <ul className="list-none space-y-2">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Use Public Transport</span> – It's often cheaper than maintaining a personal vehicle.
          </li>
          <li className="flex items-center gap-2 ml-6">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Carpool or Bike</span> – If possible, share rides or use a bike for short distances.
          </li>
          <li className="flex items-center gap-2 ml-12">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Maintain Your Vehicle</span> – Regular servicing prevents costly breakdowns.
          </li>
        </ul>
      </div>

      <div className="w-3/4 mt-10 bg-blue-100 h-96 z-10 sticky top-24 flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h1 className="text-4xl mb-4">Financial Habits:</h1>
        <ul className="list-none space-y-3 self-end text-right pr-6">
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Set a Budget</span> – Allocate limits for categories like food, entertainment, and shopping.
          </li>
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Use Cash Instead of Credit Cards</span> – Helps control impulsive spending.
          </li>
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Avoid EMI Traps</span> – Don’t buy things on EMIs unless necessary.
          </li>
        </ul>
      </div>

      <div className="w-3/4 mt-10 bg-pink-100 h-96 z-10 sticky top-24 flex flex-col justify-center p-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h1 className="text-4xl mb-4">Shopping:</h1>
        <ul className="list-none space-y-2">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Follow the 30-Day Rule</span> – If you want something, wait 30 days before buying it. If you still need it, go ahead.
          </li>
          <li className="flex items-center gap-2 ml-6">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Use Cashback & Discounts</span> – Look for promo codes and cashback offers when shopping.
          </li>
          <li className="flex items-center gap-2 ml-12">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Buy Second-Hand</span> – Clothes, furniture, and even gadgets can be bought pre-owned for less.
          </li>
        </ul>
      </div>

      <div className="w-3/4 mt-10 bg-purple-100 h-96 z-10 sticky top-24 flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h1 className="text-4xl mb-4">Technology & Bills:</h1>
        <ul className="list-none space-y-3 self-end text-right">
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Use Free Software</span> – Instead of paid apps, try free alternatives like LibreOffice, GIMP for editing.
          </li>
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Limit Data Usage</span> – Avoid excessive mobile data charges by using Wi-Fi when possible.
          </li>
          <li className="flex items-center gap-2 justify-end">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Switch to Affordable Plans</span> – Check if you can reduce mobile, internet, or cable bills.
          </li>
        </ul>
      </div>

      <div className="w-3/4 mt-10 bg-green-100 h-96 z-10 sticky top-24 flex flex-col justify-center items-center text-center p-6 rounded-lg shadow-md transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer">
        <h1 className="text-4xl mb-4">Entertainment:</h1>
        <ul className="list-none space-y-3 self-end text-right pr-6">
          <li className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Borrow Instead of Buying</span> – Books, tools, or equipment can often be borrowed instead of purchased.
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">Opt for Free Activities</span> – Instead of costly outings, try free parks, events, or home movie nights.
          </li>
          <li className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-500" />
            <span className="font-semibold">DIY Gifts & Decor</span> – Handmade gifts and home decor can save a lot.
          </li>
        </ul>
      </div>
    </div>
  );
};
