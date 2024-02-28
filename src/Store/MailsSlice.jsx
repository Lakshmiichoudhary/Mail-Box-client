import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
    name : "mails",
    initialState : {
        showCompose:false,
        seleteMail: [],
        mails: [], 
    },
    reducers : {
        openCompose:(state) => {
            state.showCompose = true
        },
        closeCompose:(state) => {
            state.showCompose = false
        },
        openMail:(state,action) => {
            state.seleteMail = action.payload
        },
        markAsRead: (state, action) => {
            const mailId = action.payload;
            const mailIndex = state.mails.findIndex(mail => mail.id === mailId);
            if (mailIndex !== -1) {
                state.mails[mailIndex].isRead = true;
            }
        },
        
    }
})

export const { openCompose,closeCompose,openMail,markAsRead } = mailsSlice.actions

export default mailsSlice.reducer