import { createSlice } from "@reduxjs/toolkit";

const initialState={
   count:0
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{

        
        // inc:(state)=>{
        //     state.count=state.count+1;

        // },
        // dec:(state)=>{
        //     state.count=state.count-1;

        // }
     
    }
})

export const{inc,dec}=cartSlice.actions;
export default cartSlice.reducer;

