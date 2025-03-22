import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ Correct import
import './App.css';
import { Navbar } from './components/common/Navbar';
import {  Expense } from './pages/Dashboard';
import { History } from './pages/History';
import { Analytics } from './pages/Analytics';
import { Home } from './pages/HomePage';
import { LiveAnimaton } from './components/LiveAnimaton';
import VoiceRecorder from './pages/Mic';
import Restaurants from './components/rest';
import {SignUp} from './pages/SignUp';
import {SignIn} from './pages/SignIn'

import {ToastContainer} from 'react-toastify'



function App() {

  return (
    <BrowserRouter> 
      <Navbar />
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
              <Routes>
                <Route path='/LiveAnimation' element={<LiveAnimaton/>}/>
                <Route path='/HomePage' element={<Home />}/>
                <Route path="/Home" element={<Home />} />
                <Route path="/Dashboard" element={<Expense />} />
                <Route path="/Analytics" element={<Analytics/>} />
                <Route path="/History" element={<History />} />
                <Route path='/Mic' element={<VoiceRecorder/>}/>
                <Route path="/rest" element={<Restaurants />}/>
                <Route path='*' element={<SignIn/>} />
                <Route path='/SignUp' element={<SignUp/>} />
                <Route path='/SignIn' element={<SignIn/>} />
              </Routes>
              <ToastContainer/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
