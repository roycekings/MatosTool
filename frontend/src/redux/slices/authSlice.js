import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,

    token:null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        signIn: (state,action)=>{
            state.user = action.payload.responseEmploye;
            state.token = action.payload.token
            
            
        },
        update: (state,action)=>{
            state.user = action.payload
        },
        logout:(state)=>{
            state.user =  null
            state.token = null
        
        }
    }
})





export const {logout,signIn,update} = authSlice.actions
export default authSlice.reducer