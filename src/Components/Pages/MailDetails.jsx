import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { useSelector } from 'react-redux'
import { useDeleteMail } from '../Hooks/useDeleteMails';

const MailDetails = () => {
  const mail = useSelector(store => store.mails.seleteMail)
  const navigate = useNavigate()
  const deleteMail = useDeleteMail(mail)

  const handleClose = () => {
      navigate("/mailBox")
  }
 
  const handleDelete = async () => {
    deleteMail(handleClose)
  };
  
  return (
    <div>
      <div className='flex justify-between bg-blue-900 '>
        <h1 className='p-4 text-2xl text-white'>
          Mail Box📩
        </h1>
      </div>
    <div className='flex'>
      <div>
        <SideBar/>
      </div>
    <div className='bg-white border-2 border-blue-300 rounded-lg h-screen w-screen'>
      <div className='flex justify-between m-2 p-2 border-b border-blue-300'>
        <div className='cursor-pointer' >
          <ArrowBackIcon onClick={handleClose} /> Back
        </div>
        <div className='cursor-pointer'>
          <DeleteForeverIcon className='mx-4' onClick={handleDelete} />
          <UnsubscribeIcon className='mx-4' />
          <MoreHorizIcon className='mx-4'/>
        </div>
        <div className='cursor-pointer'>
          <CloseIcon className='mx-4' onClick={handleClose} />
          <SettingsIcon className='mx-4' />
        </div>
      </div>
      <div className='p-2 h-full'>
        <div className='p-2 border-b border-blue-300 flex font-bold'>
          <h3>{mail.subject}</h3>
          <BeenhereIcon className='mx-4' />
        </div>
        <div className='p-3 border-b border-blue-300 flex justify-between'>
          <div className='flex font-bold'>
          <AccountCircleIcon />
          <p className='mx-4'>{mail.name}</p>
          </div>
          <div>
            <p>{mail.time}</p>
          </div>
        </div>
        <div className='p-2 mt-2' dangerouslySetInnerHTML={{ __html: mail.message }} />
      </div>
    </div>
    </div>
    </div>
  )
}

export default MailDetails
