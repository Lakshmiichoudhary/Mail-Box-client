import React from 'react'
import { useDispatch } from 'react-redux'
import { openCompose } from '../../Store/MailsSlice'
import { useNavigate } from 'react-router-dom'

const SideBar = ({ unreadCount }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCompose = () => {
        dispatch(openCompose())
    }

    const handleSentMail = () => {
        navigate("/sentMail");
    }

    const handleInboxMail = () => {
        navigate('/mailBox');
    }
    
  return (
    <div className='p-6 h-screen lg:w-56 w-28 bg-gray-300'>
        <button className='lg:p-3 lg:bg-blue-500 p-2 lg:rounded-full rounded-lg font-bold lg:text-white hover:text-black'
            onClick={handleCompose}>
            ➕ Compose
        </button>
        <div className=' cursor-pointer'>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100 flex'
                onClick={handleInboxMail}>
                Inbox 
                <p className='lg:mx-24 mx-3 font-bold text-red-700'>
                    {unreadCount }
                </p>
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Unread
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Draft
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'
                onClick={handleSentMail}>
                Sent 
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Archive
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Spam
            </h1>
            <h1 className='my-3 p-2 hover:bg-blue-300 border-b-2 border-x-blue-100'>
                More Info
            </h1>
        </div>
    </div>
  )
}

export default SideBar
