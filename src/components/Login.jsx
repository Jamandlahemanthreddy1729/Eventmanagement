import React, { useState } from 'react'

const Login = () => {
  const [isSignIn,setIsSignIn]=useState(true);
  const handleSignUp =()=>{
    setIsSignIn(!isSignIn);
  }
  return (
    <div>
        <div className='w-4/12 bg-blue-300 rounded-2xl mx-auto'>
            <h1 className='font-bold text-2xl m-2 p-2'>{ isSignIn ? "Sign In" :"Sign Up" }</h1>
            <form className='p-4' onSubmit={(e)=>e.preventDefault()}>
              {
                !isSignIn &&<>
                <input type='text' className='w-full rounded-xl bg-blue-100 p-2 my-2' placeholder='enter name'/>
                <input type='text' className='w-full rounded-xl bg-blue-100 p-2 my-2' placeholder='Department name'/>
                <input type='text' className='w-full rounded-xl bg-blue-100 p-2 my-2' placeholder='Roll no'/>
                </>
              }
               <input className='w-full rounded-xl bg-blue-100 p-2 my-2' type='text' placeholder='enter email address'/>
               <input className='w-full rounded-xl bg-blue-100 p-2 my-2' type='text' placeholder='enter password'/>
               {
                !isSignIn && <input type='password' className='w-full rounded-xl bg-blue-100 p-2 my-2' placeholder='confirm password' />
               }
               <button className='w-full rounded-xl bg-blue-400 p-2 my-4 font-bold cursor-pointer'>{ isSignIn ? "Sign In" :"Sign Up" }</button>
               <p className='my-4 cursor-pointer' onClick={handleSignUp}>{ isSignIn ? "New User ? Sign Up" :"Already registered ? Sign In" }</p>
            </form>
        </div>
    </div>
  )
}

export default Login