import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addUser, removeuser } from '../../Store/UserSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../Utils/Firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() =>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid,email,password } = user;
          dispatch(addUser({uid : uid, email : email,password : password}))
          navigate('/mailBox')
      } else {
        dispatch(removeuser())
        navigate('/')
      }
    });  
  },[])

  return (
    <div>
        <h1 className='p-4 text-2xl text-white bg-blue-900'>
          Mail Box📩
        </h1>
    </div>
  )
}

export default Header
