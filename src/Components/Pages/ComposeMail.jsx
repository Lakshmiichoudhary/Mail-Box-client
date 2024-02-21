import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {collection,addDoc} from '@firebase/firestore'
import { db } from '../../Utils/Firebase';

const ComposeMail = () => {
  const [to,setTo] = useState('')
  const [subject,setSubject] = useState('')
  const [value, setValue] = useState('');

  const mails = collection(db,"Emails")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!to || !subject || !value) {
        return alert("All fields are required");
    }

    const mailData = {
      to : to,
      subject : subject,
      value : value
    }

    await addDoc(mails,mailData)
      alert("Email sent sucessfully")

      setTo("");
      setSubject("");
      setValue("");
  };

  return (
    <div>
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
      <div style={{ flex: '1', marginBottom: '60px' }}>
      <ReactQuill
        theme="snow"
        className=" h-80"
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
