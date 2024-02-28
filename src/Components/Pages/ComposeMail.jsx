import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { closeCompose } from '../../Store/MailsSlice';

const ComposeMail = () => {
  const currentUserEmail = useSelector(state => state.user.email);
  const [to,setTo] = useState('')
  const [subject,setSubject] = useState('')
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!to || !subject || !value) {
      return alert("All fields are required");
    }
  
    const currentTime = new Date();
    const mailData = {
      from: currentUserEmail, 
      to: to,
      subject: subject,
      value: value,
      time: currentTime.getTime(),
    };
  
    try {
      const response = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/emails.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData),
      });
  
      const sentResponse = await fetch('https://mailbox-a2e2c-default-rtdb.firebaseio.com/sentEmails.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mailData),
      });
  
      if (!response.ok || !sentResponse.ok) {
        throw new Error('Failed to send email');
      }
  
      alert('Email sent successfully');
      setTo('');
      setSubject('');
      setValue('');
      dispatch(closeCompose());
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  const handleClose = () => {
    dispatch(closeCompose())
  }
  
  return (
    <div  className=' bg-white relative'>
      <div className='p-2 bg-gray-700 text-white flex justify-between'>
        <h1 className='p-2'>New Message</h1>
        <CloseIcon className='m-2 mx-4 cursor-pointer' onClick={handleClose} />
      </div>
      <div>
      <input className='w-full p-4 border-b-2 border-x-yellow-100' 
        type='email' 
        placeholder='To :'
        value={to}
        onChange={(e) => setTo(e.target.value)} />
      <input className='w-full p-4' 
        type='text' 
        placeholder='Subject'
        value={subject}
        onChange={(e) => setSubject(e.target.value)} />
      </div>
      <div style={{ flex: '1', marginBottom: '55px' }}>
      <ReactQuill
        theme="snow"
        className=" h-64"
        value={value}
        onChange={setValue}
      />
      </div>
      <button className='p-3 bg-blue-500 rounded-md px-5 mx-4'
        onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
};

export default ComposeMail;
