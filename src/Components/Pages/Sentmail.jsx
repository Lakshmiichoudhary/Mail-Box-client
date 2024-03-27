import React from 'react';
import SideBar from './SideBar';
import MailsItems from './MailsItems';
import Mails from './Mails';
import { useSentMail } from '../Hooks/UseSentMail';
import ComposeMail from './ComposeMail';
import { useSelector } from 'react-redux';

const Sentmail = () => {
  const {sentMails} = useSentMail()
  const composeOpen = useSelector(store => store.mails.showCompose)

  return (
    <div>
      <div className='flex justify-between bg-blue-900 '>
        <h1 className='p-4 text-2xl text-white lg:mx-16'>
          Mail Box📩
        </h1>
      </div>
      <div className='flex absolute'>
        <div>
          <SideBar />
        </div>
        <div>
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
        <div className='p-2 absolute'>
        {composeOpen && <ComposeMail />}
      </div>
      </div>
    </div>
  );
};

export default Sentmail;
