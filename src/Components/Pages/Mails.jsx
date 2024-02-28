import React, { useState } from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { markAsRead, openMail } from '../../Store/MailsSlice';

const stripHtmlTags = (html) => {
  const tempElement = document.createElement('div');
  tempElement.innerHTML = html;
  return tempElement.textContent || tempElement.innerText || '';
};

const Mails = ({ id,name, subject, message, time, isRead }) => {
  const strippedMessage = stripHtmlTags(message);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [read, setRead] = useState(isRead);

  const mailDetail = () => {
    //console.log("Mail detail", id);
    dispatch(openMail({
      id,
      name,
      subject,
      message,
      time,
    }));
    navigate('/mailDetails');
  };

  const handleMailClick = () => {
    if (!read) {
      dispatch(markAsRead(id)); 
      setRead(true); 
    }
    mailDetail();
  };

  return (
    <div >
      <div className='flex justify-between p-3 mx-3 cursor-pointer border-b border-blue-200' onClick={handleMailClick}>
        <div className='flex'>
          <CheckBoxOutlineBlankIcon />
          <div className={`w-6 h-6 rounded-full border-2 mx-4 border-black ${read ? "bg-white" : "bg-blue-600"}`}></div>
          <h3 className='font-bold mx-4'>{name}</h3>
        </div>
        <div className='max-w-lg'>
          <p className='truncate'><b>{subject}</b> {strippedMessage}</p>
        </div>
        <div>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default Mails;
