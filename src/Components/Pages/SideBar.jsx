import React from 'react'
import { useDispatch } from 'react-redux'
import { openCompose } from '../../Store/MailsSlice'

const SideBar = () => {
    const dispatch = useDispatch()

    const handleCompose = () => {
        dispatch(openCompose())
    }
    
  return (
    <div className='p-6 h-screen w-56 bg-gray-300'>
        <button className='p-3 bg-blue-500 rounded-full font-bold text-white hover:text-black'
            onClick={handleCompose}>
            ➕ Compose
        </button>
        <div className=' cursor-pointer'>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Inbox
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Unread
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Draft
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Sent
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Archive
            </h1>
            <h1 className='my-3 p-2  hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Spam
            </h1>
            <h1 className='my-3 p-2 hover:bg-blue-300 border-b-2 border-x-blue-100'>
                Deleted Items
            </h1>
        </div>
    </div>
  )
}

export default SideBar
