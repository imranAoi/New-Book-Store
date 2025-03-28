import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { FaGoogle} from 'react-icons/fa'
import { useForm } from "react-hook-form";
import {useAuth} from "../Context/AuthContext"
 function Login() {
    const [message,setMessage]=useState('')
    const { loginUser, signInWithGoogle} = useAuth();
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

 const onSubmit = async (data) => {
    try {
        await loginUser(data.email, data.password);
        alert("Login successful!");
        navigate("/")
    } catch (error) {
        setMessage("Please provide a valid email and password") 
        console.error(error)
    }
  }
 const handleGoogleSignIn = async () => {
    try {
        await signInWithGoogle();
        alert("Login successful!");
        navigate("/");
    } catch (error) {
        setMessage("Google sign in failed!");
        console.error(error);
    }
};
  return (
    <div className='h-[calc(100vh-120px)] border flex justify-center items-center '>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>Email</label>
    <input {...register("email", { required: "Email is required" })} type='email' name='email' id='email' placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
    {errors.email && <p className='text-red-500 text-xs italic'>{errors.email.message}</p>}
</div>
<div className='mb-4'>
    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>Password</label>
    <input {...register("password", { required: "Password is required" })} type='password' name='password' id='password' placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow'/>
    {errors.password && <p className='text-red-500 text-xs italic'>{errors.password.message}</p>}
</div>
                <div>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none'>Login</button>
                </div>
                
            </form>
            <p className='align-baseline font-medium mt-4 text-sm'>Haven't an accout?Please Register
                <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
            </p>
            <div className='mt-4'>
                <button onClick={handleGoogleSignIn} className='w-full flex flex-wrap gap-1 items-center justify-center bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                    <FaGoogle className='mr-2'/>
                    Sign in with Google
                </button>
            </div>
            <p className='mt-5 text-center text-gray-500 text-xs'>2025 Book store.All rights reserved.</p>
        </div>
    </div>
  )
}
export default Login