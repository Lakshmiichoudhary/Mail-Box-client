import React from 'react';
import SideBar from './SideBar';
import MailsItems from './MailsItems';
import Mails from './Mails';
import { useSentMail } from '../Hooks/UseSentMail';
import ShimmerUI from '../../Utils/ShimmerUI';

const Sentmail = () => {
  const {sentMails} = useSentMail()

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
            {sentMails.length === 0 ? (
              <ShimmerUI />
            ) : (
              sentMails.map((mail) => (
                <Mails
                  key={mail.id}
                  id={mail.id}
                  name={mail.to} 
                  subject={mail.subject}
                  message={mail.value} 
                  time={new Date(mail.time).toLocaleString()}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentmail;
