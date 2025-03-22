import React from 'react'
import "../styles/LiveAnimation.css";
import { Mic } from 'lucide-react';
import { Div1 } from './childComponents/div1';
import { useNavigate } from 'react-router-dom';
import { Footer } from './Footer';




export const LiveAnimaton = () => {
const navigate=useNavigate()

  return (
<>

<div className='Live'>

  <div className="bubble">
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
    <img src="/src/assets/images/bubble.png" alt="buble" />
  </div>

 
  {/* <div className='content '>
    <h1 >
       Travel and expense management for growing businesses
    </h1>
    <small>Experience the convenience of simplified travel booking, faster expense reporting, and effective cost control. With Xpensr Expense, take the first step to revolutionize the way you manage travel and expense.</small>
 </div> */}
 {/* <div className="videoDiv">
    <img   className='w-full h-full rounded-2xl' src="https://media.istockphoto.com/id/1342223620/photo/unrecognizable-afro-american-businessman-checking-family-expenses-using-digital-tablet.jpg?s=612x612&w=0&k=20&c=Etp5M7r8I-ZSEghJlvA7jY5mXSxYUPcBYpwmQ-n4rgo=" alt="pic" />
 </div> */}

<div className='ticker-container'>
    <div className="ticker-wraper">
        <div className="ticker-content">
          <p className='text-white'>💰"Every penny counts—track it, save it, grow it!" 📊"Financial freedom starts with tracking your expenses!" </p>
        </div>
    </div>
</div>



</div>



<div className='absolute z-40 bg-white w-3/4 shadow-md h-fit transform -translate-x-1/2 -translate-y-1/2 -translate-y-[10px] left-1/2 
hover:bg-green-200 hover:-translate-y-5 transition-all
rounded-bl-2xl rounded-br-2xl rounded-tl-2xl text-center'>
      <h1>Best Feature Provided By <span className="text-pink-500 text-4xl ">X</span>pensr
    </h1>

    <h2 className='text-xl text-pink-600 hover:text-green-800'>New to the city? Just say its name, and let the flavors guide you to its top 5 must-try dishes!👉
       <button onClick={()=>{navigate('/Mic')}} className='text-4xl text-black hover:scale-110 transition-all  '><Mic size={24} className="hover:scale-150 transition-all"  /></button></h2>
</div>


<Div1 />

</>


  )
}
