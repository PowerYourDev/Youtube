import { createSlice } from "@reduxjs/toolkit";

type initialState={
    value: number
 }

// const initialState:initialState={
//     value:0
// }


const update = createSlice({
    name:"updatingvalue",
    initialState:{
        value:0
    }as initialState,
        
    
    reducers:{
        increment:(state)=>{
          state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        updateValue:(state,action)=>{
            state.value=state.value+action.payload
        }
    }
})

export  default update.reducer
export const {increment,decrement,updateValue}=update.actions