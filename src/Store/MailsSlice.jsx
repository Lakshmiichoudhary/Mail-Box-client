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
        
    }
})

export const { openCompose,closeCompose,openMail } = mailsSlice.actions

export default mailsSlice.reducer