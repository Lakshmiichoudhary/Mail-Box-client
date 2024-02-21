import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        addUser : (state,action) => {
            return action.payload;
        },
        removeuser : () => {
            return null
        }
    }
})

export const { addUser,removeuser } = userSlice.actions

export default userSlice.reducer