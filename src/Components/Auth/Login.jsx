import React, { useRef, useState } from 'react'
import Header from '../Header/Header'
import validation from '../../Utils/Validation'
import { auth } from '../../Utils/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const[IsLogin,setIsLogin] = useState(true)
    const [errormessage,setErrormessage] = useState()
    const email = useRef(null)
    const password = useRef(null)
    const confirmPassword = useRef(null)

    const handleSubmit = () => {
        const isSignUp = !IsLogin;

        const message = validation(
            email.current?.value,
            password.current?.value,
            confirmPassword.current?.value,
            isSignUp) 
        setErrormessage(message)
        if(message) return

        if(!IsLogin){
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
        } else {
            signInWithEmailAndPassword(auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrormessage(errorCode +"/"+ errorMessage)
                });
        }

    }

    const toggleLogin = () => {
        setIsLogin(!IsLogin)
        setErrormessage("")
    }


  return (
    <div>
        <div>
            <Header />
        </div>
        <div className='p-2 m-auto left-0 right-0 md:w-3/12 mt-16 md:border-4 text-center border-blue-800'>
        <form className='p-2'
            onSubmit={(e) => e.preventDefault()}>
            <h1 className='p-2 font-bold text-2xl'>
                {!IsLogin ? "Sign up" : "Sign In"}
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
        {!IsLogin && (
        <div>   
        <input className='m-2 p-3 bg-blue-900'
            ref={confirmPassword}
            type='Password'
            placeholder='Confirm Password'/>
        </div>)}
        <p className='p-2 text-red-700 font-bold'>
            {errormessage}
        </p>
        <div>
            <button className='m-2 p-3 w-52 bg-slate-950 text-white hover:bg-blue-950'
            onClick={handleSubmit}>
                {!IsLogin ? "Sign up" : "Sign In"}
            </button>
        </div>
        <p className='p-2 text-black cursor-pointer font-bold' 
        onClick={toggleLogin}>
            {!IsLogin ? "Allready registred? Sign In" : "New user? Sign Up"}
        </p>
        </form>
        </div>          
    </div>
  )
}

export default Login
