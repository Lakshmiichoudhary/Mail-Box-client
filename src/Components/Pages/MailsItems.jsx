import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MailsItems = () => {

  return (
    <div>
      <div className='p-2 h-16 lg:w-[82vw] '>
      <div className='flex justify-between border-b border-blue-200'>
        <div className='m-2 mx-4'>
        <CheckBoxOutlineBlankIcon />
        <KeyboardArrowDownIcon />
        <ReplayIcon className='mx-4' />
        <MoreVertIcon className='mx-3' />
        </div>
        <div className='m-2 mx-4'>
          <ChevronLeftIcon />
          <ChevronRightIcon />
        </div>
      </div>
      </div>
    </div>
  
  )
}

export default MailsItems
