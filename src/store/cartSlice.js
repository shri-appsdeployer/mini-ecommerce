import { createSlice } from "@reduxjs/toolkit";


// reducers are the pure functions which helps us to manipulate our state

const cartSlice =createSlice({
    name:'cart',
    initialState:{
        cart:[],
        isLoading:true
    },
    reducers:{
        add(state,action){
                state.cart.push(action.payload);
        },

        remove(state,action){
           return state.cart.filter(item => item.id !== action.payload)
        }
    }
})

// exports our actions  
export const {add,remove} = cartSlice.actions;

// getstate
export const getState =(state)=> state;
export const getCart = (state) => state.cart.cart; // get the state of news


// export reducer
export default cartSlice.reducer;