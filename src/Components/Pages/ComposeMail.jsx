import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { closeCompose } from '../../Store/MailsSlice';
import { usePost } from '../Hooks/usePostMails';
import { useNavigate } from 'react-router-dom';

const ComposeMail = () => {
  const [to,setTo] = useState('')
  const [subject,setSubject] = useState('')
  const [value, setValue] = useState('');
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const post = usePost()
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!to || !subject || !value) {
      return alert("All fields are required");
    }
  
    const emailSent = await post(to, subject, value);
    if (emailSent) {
      alert('Email sent successfully');
      setTo('');
      setSubject('');
      setValue('');
      dispatch(closeCompose());
      navigate('/sentMail');
    } else {
      alert('Failed to send email. Please try again.');
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
      <input className=' p-4 border-b-2 border-x-yellow-100' 
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
        className="lg:h-64"
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