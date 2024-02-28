import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';
import MailsItems from './MailsItems';
import Mails from './Mails';
import { useSelector } from 'react-redux';

const Sentmail = () => {
  const currentUser = useSelector(state => state.user);
  const [sentMails, setSentMails] = useState([]);

  useEffect(() => {
    const fetchSentMails = async () => {
      try {
        const response = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/sentEmails.json');
        if (!response.ok) {
          throw new Error('Failed to fetch sent emails');
        }
        const data = await response.json();
        const sentMails = data ? Object.entries(data)
          .filter(([id, mail]) => mail.from === currentUser.email)
          .map(([id, mail]) => ({ id, ...mail})) : [];
  
        setSentMails(sentMails);
      } catch (error) {
        console.error('Error fetching sent emails:', error);
      }
    };
  
    fetchSentMails();
  }, [currentUser]);

  return (
    <div>
      <div className='flex justify-between bg-blue-900 '>
        <h1 className='p-4 text-2xl text-white'>
          Mail Box📩
        </h1>
      </div>
      <div className='flex absolute'>
        <div>
          <SideBar />
        </div>
        <div className=''>
          <div>
            <MailsItems />
            {sentMails.map((mail) => (
              <Mails
                key={mail.id}
                id={mail.id}
                name={mail.to} 
                subject={mail.subject}
                message={mail.value} 
                time={new Date(mail.time).toLocaleString()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentmail;
