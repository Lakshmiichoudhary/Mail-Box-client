import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { openMail, } from '../../Store/MailsSlice';

  const stripHtmlTags = (html) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || '';
  };
  
  const Mails = ({ id, name, subject, message, time }) => {
    const strippedMessage = stripHtmlTags(message);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  
    const mailDetail = () => {
      console.log("Mail detail clicked:", id);
      dispatch(openMail({
        id,
        name,
        subject,
        message,
        time
      }));
      //console.log(id)
      navigate('/mailDetails');
    };
  
    return (
      <div>
        <div className='flex justify-between p-3 mx-3 cursor-pointer border-b border-blue-200' onClick={mailDetail}>
          <div className='flex'>
            <CheckBoxOutlineBlankIcon />
              <div className='w-6 h-6 rounded-full border-2 mx-4 border-black bg-blue-600'></div>
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
    )
  }
  
  export default Mails;