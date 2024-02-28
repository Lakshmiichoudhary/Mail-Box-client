import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ComposeMail from './ComposeMail'
import SideBar from './SideBar'
import MailsItems from './MailsItems'
import { useSelector } from 'react-redux'
import Mails from './Mails'

const MailBoxPage = () => {
  const  currentUser = useSelector(state => state.user);
  const composeOpen = useSelector(store => store.mails.showCompose)
  const [mails, setMails] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const inboxResponse = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/emails.json');
        if (!inboxResponse.ok) {
          throw new Error('Failed to fetch emails');
        }
        const inboxData = await inboxResponse.json();
        const inboxMails = inboxData ? Object.entries(inboxData)
          .filter(([id, mail]) => mail.to === currentUser.email)
          .map(([id, mail]) => ({ id, ...mail, isRead: mail.isRead || false })) : [];

        setMails(inboxMails);

        const unread = inboxMails.filter(mail => !mail.isRead);
        setUnreadCount(unread.length);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchMails();
  }, [currentUser]);

  return (
    <div>
      <Header />
      <div cl>  
      <div className='flex absolute'> 
      <div>
        <SideBar unreadCount={unreadCount} />
      </div>
      <div className=''>
      <div >
        <MailsItems />
        {mails.map((mail) => (
              <Mails
                key={mail.id}
                id={mail.id}  
                name={mail.from}
                subject={mail.subject}
                message={mail.value}
                time={new Date(mail.time).toLocaleString()}
                isRead={mail.isRead}
               />
            ))}
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
