import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon  from '@mui/icons-material/RadioButtonUnchecked';

const Mails = ({name,subject,time}) => {
  return (
    <div>
    <div className='flex justify-between p-3 mx-3 cursor-pointer border-b border-blue-200'>
      <div className='flex'>
          <CheckBoxOutlineBlankIcon />
          <RadioButtonUncheckedIcon className='mx-4' />
          <h3 className='font-bold mx-4'>{name}</h3>
      </div>
      <div className=' max-w-lg'>
        <p className='truncate'><b>Subject : </b>{subject}</p>
      </div>
      <div>
          <p>{time}</p>
      </div>
    </div>
    </div>
  )
}

export default Mails
