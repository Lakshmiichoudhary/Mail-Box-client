import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice';
import MailsReducer from './MailsSlice';

const appStore = configureStore({
    reducer : {
        user : UserSlice,
        mails : MailsReducer

    }
})

export default appStore;