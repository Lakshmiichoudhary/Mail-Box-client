import React from 'react'
import Header from '../Header/Header'
import ComposeMail from './ComposeMail'
import SideBar from './SideBar'
import MailsItems from './MailsItems'
import { useSelector } from 'react-redux'
import Mails from './Mails'
import { useFetchEmails } from '../Hooks/useFetchMails'
import ShimmerUI from '../../Utils/ShimmerUI'

const MailBoxPage = () => {
  const  {mails,unreadCount} = useFetchEmails()
  const composeOpen = useSelector(store => store.mails.showCompose)
  
  return (
    <div>
      <Header />
      <div>  
      <div className='flex absolute'> 
      <div>
        <SideBar unreadCount={unreadCount} />
      </div>
      <div className=''>
      <div >
        <MailsItems />
        {mails.length === 0 ? (<ShimmerUI />) : (mails.map((mail) => (
              <Mails
                key={mail.id}
                id={mail.id}  
                name={mail.from}
                subject={mail.subject}
                message={mail.value}
                time={new Date(mail.time).toLocaleString()}
                read={mail.read}
               />
            )))}
      </div>
      </div> 
      </div> 
       <div className='p-2'>
        {composeOpen && <ComposeMail />}
      </div>
      </div>
    </div>
  )
}

export default MailBoxPage
