import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeuser } from '../../Store/UserSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../Utils/Firebase';
import { useNavigate } from 'react-router-dom';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

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

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });
  }
  
  return (
    <div className='flex justify-between bg-blue-900 '>
        <h1 className='p-4 text-2xl text-white'>
          Mail Box📩
        </h1>
        {user && <div className='p-6 mx-4 cursor-pointer'>
          <LogoutSharpIcon onClick={handleSignout} />
        </div>}
    </div>
  )
}

export default Header
