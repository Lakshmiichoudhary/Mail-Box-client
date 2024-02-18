import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import validation from '../../Utils/Validation'
import { auth } from '../../Utils/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)
    const [errormessage,setErrormessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const message = validation(email.current.value,password.current.value,confirmPassword.current.value) 
        setErrormessage(message)
        if(message) return

        createUserWithEmailAndPassword(auth, 
            email.current.value,
            password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrormessage(errorCode + "/" + errorMessage)
            });

    }



  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='p-2 m-auto left-0 right-0 md:w-3/12 mt-16 md:border-4 text-center border-blue-800'>
        <form className='p-2'>
            <h1 className='p-2 font-bold text-2xl'>
                Sign up
            </h1>
        <div>
        <input className='m-2 p-3 bg-blue-900'
            ref={email}
            type='Email'
            placeholder='Email'/>
        </div>
        <div>
        <input className='m-2 p-3 bg-blue-900'
            ref={password}
            type='Password'
            placeholder='Password'/>
        </div>
        <div>
        <input className='m-2 p-3 bg-blue-900'
            ref={confirmPassword}
            type='Password'
            placeholder='Confirm Password'/>
        </div> 
        <p className='p-2 text-red-700 font-bold'>
            {errormessage}
        </p>
        <div>
            <button className='m-2 p-3 w-52 bg-slate-950 text-white hover:bg-blue-950'
            onClick={handleSubmit}>
                Sign up
            </button>
        </div>
        </form>
        </div>          
    </div>
  )
}

export default Login
