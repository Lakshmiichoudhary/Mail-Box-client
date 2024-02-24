import { createSlice } from "@reduxjs/toolkit";

const mailsSlice = createSlice({
    name : "mails",
    initialState : {
        showCompose:false
    },
    reducers : {
        openCompose:(state) => {
            state.showCompose = true
        },
        closeCompose:(state) => {
            state.showCompose = false
        }

    }
})

export const { openCompose,closeCompose } = mailsSlice.actions

export default mailsSlice.reducer