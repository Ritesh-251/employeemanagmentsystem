import React, { useState } from 'react';



const Login = () => {
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function submitHandler(e){

        e.preventDefault();
        setEmail("")
        setPassword('')
    }
 
    
    
  return (
    <div className="flex items-center justify-center  bg-black min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 border-">
        <h2 className="text-black text-center text-2xl font-semibold  mb-4">Login</h2>
        <form onSubmit={(e)=>{submitHandler(e)}
        }className="space-y-4">
         
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
             }}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black placeholder-gray-500"
            />
          </div>

        
          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
             }}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black placeholder-gray-500"
            />
          </div>

       
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

