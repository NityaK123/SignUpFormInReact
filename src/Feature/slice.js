import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    data:[
        {name:"Nityanand Gupta",id:1},
    ]
};

export const dataSlice=createSlice({
    name:"resume",
    initialState,
    reducers:{
        addName:(state,action)=>{
            const dat={id:nanoid(),name:action.payload}
            state.data.push(dat);
        }
    }
});

export const {addName} = dataSlice.actions;

export default dataSlice.reducer; 