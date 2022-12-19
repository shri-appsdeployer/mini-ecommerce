import { createSlice } from "@reduxjs/toolkit";

// reducers are the pure functions which helps us to manipulate our state

const cartSlice =createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
                state.push(action.payload);
        },

        remove(state,action){
            return state.filter(item => item.id !== action.payload)
        }
    }
})

// exports our actions
export const {add,remove} = cartSlice.actions;
// export reducer
export default cartSlice.reducer;