import React, {useState} from 'react'
import { assets } from '../assets/assets'

const Login = () => {

  const [state, setState] = useState('Sign Up')
  
  const [ email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ name, setName] = useState('')
     
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  } 

  return (
    <div style={{ backgroundColor: "#E6E6FA" }}>

      <div className='px-30 my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[500px]' src={assets.signup_page} alt="" /> 

      <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : " Login"}</p> 
        <p >Please {state === 'Sign Up' ? "sign up" : " login"} to book appointment</p>
        {
          state === "Sign Up" && <div className='w-full'>
            <p>Full Name</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        </div>
        }      
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
        </div>
        <button type='submit' className='text-white w-full py-2 rounded-md text-base'style={{ backgroundColor: "#452c63" }}>{state === 'Sign Up' ? "Create Account" : " Login"}</button>

        {
          state === "Sign Up"
          ? <p>Already have an account? <span onClick={()=> setState('Login')} className='text-[#DB4444] underline cursor-pointer' style={{ color: "#452c63" }} >Login here</span></p>
          : <p>Create a new account? <span onClick={()=> setState('Sign Up')} className='text-[#DB4444] underline cursor-pointer' style={{ color: "#452c63" }}>click here</span></p>
        }
      </div> 
    </form>
    </div>
    </div>
  )
}

export default Login