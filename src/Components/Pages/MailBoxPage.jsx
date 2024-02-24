import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import ComposeMail from './ComposeMail'
import SideBar from './SideBar'
import MailsItems from './MailsItems'
import { useSelector } from 'react-redux'
import Mails from './Mails'

const MailBoxPage = () => {
  const composeOpen = useSelector(store => store.mails.showCompose)
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com//emails.json');
        if (!response.ok) {
          throw new Error('Failed to fetch emails');
        }
        const data = await response.json();
        const fetchedMails = Object.values(data);
        setMails(fetchedMails);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchMails();
  }, [mails]); 

  return (
    <div>
      <Header />
      <div cl>  
      <div className='flex absolute'> 
      <div>
        <SideBar />
      </div>
      <div>
        <MailsItems />
            {mails.map((mail, index) => (
              <Mails key={index} name={mail.to} subject={mail.subject} time={new Date(mail.time).toLocaleString()} />
            ))}
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
