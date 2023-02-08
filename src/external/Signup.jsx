import React from 'react'
import { Link } from 'react-router-dom'
import Navbarlogin from './Navbarlogin'
import { useState } from 'react'
// import { useSignup } from '../hooks/useSignup'
 
function Signup(props) {
// //   const [name, setName] = useState("")
// //   const [email, setEmail] = useState("")
// //   const [password, setPassword] = useState("")
// //   const {signup, error, isLoading} = useSignup()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     // console.log(name, email, password)
//     await signup(name, email, password)
//     // await signup(email, password)
//   }

  return (
    <div>
      <Navbarlogin/>
    <div className='grid grid-flow-col items-center  md:grid-cols-2 justify-center mb-48'>
      <div>
         <h1 className="hidden md:text-white md:grid md:mx-12  md:text-2xl">Sign up and start shopping from your favourite stores in town.</h1>
      </div>  
    <form className='SIGNUP drop-shadow-2xl md:flex md:flex-col md:justify-center md:items-center bg-white rounded-xl md:mx-20 px-18 mt-14 md:w-3/4' >
  <label className='flex flex-col justify-center items-center'>
  <h3 className='text-black pt-5 pb-4 mt-5 text-xl font-medium'>Sign Up</h3>
  <h4 className='md:hidden px-6 font-light'>Sign up and start shopping from your favourite stores in town.</h4>
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="text" name="name" id='register-user-name' placeholder='Name' />
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="email" name="email" id='register-email' placeholder='Email' />
    <input className='my-5 px-2 py-2 bg-[#D9D9D9] text-black rounded text-l shadow-inner' size={25} type="password" name="password" id='create-password' placeholder="Password"  />
  <Link to='/home' className='text-white rounded-full px-12 py-2 mx-auto my-5 drop-shadow bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 font-semibold hover:bg-gradient-to-br ease-in-out transition duration-200' type="submit" >Sign Up</Link>
  {/* {error && <div className='error'>{error}</div>} */}
  <h6 className='font-normal text-sm pb-9 pt-2'>Already a member? <Link className='text-blue-600' to='/login'>Log In</Link></h6>
  </label>
</form>
    </div>
    </div>
  )
}
export default Signup