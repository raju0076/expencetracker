import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth ,db} from '../components/firebase';
import {setDoc,doc} from 'firebase/firestore'
import { toast } from 'react-toastify';





export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await createUserWithEmailAndPassword(auth, email, password); 
      const user=auth.currentUser
      console.log(user)

      if(user){
        await setDoc(doc(db,"users",user.uid),{
          email:user.email,
          firstName:firstName,
          lastName:lastName,

        })
      }
      toast.success("User Resistered successfully!",{
        position:'top-center'
      })
    } catch (error) {
      toast.error(error.message,{
          position:'top-center',
          
      })
      
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-10 ">
      <div className="w-full max-w-md bg-[url('https://previews.123rf.com/images/virtosmedia/virtosmedia2303/virtosmedia230303665/199434354-3d-abstract-background-with-geometric-forms-3d-render-illustration.jpg')] bg-center bg-cover shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-black-700 mb-6">Sign Up</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <div>
            <label className=" block text-lg text-black-500"><strong>First Name</strong></label>
            <input 
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter Your First Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg text-black-500"><strong>Last Name</strong></label>
            <input 
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Your Last Name"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-black-600"><strong>Email</strong></label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-black-600"><strong>Password</strong></label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-all"
          >
            Sign Up
          </button>

        
          <p className="text-sm text-center text-black-600">
            Already have an account? 
            <a href="/SignIn" className="text-blue-500 font-semibold hover:underline ml-1">Login</a>
          </p>

        </form>
      </div>
    </div>
  );
};
