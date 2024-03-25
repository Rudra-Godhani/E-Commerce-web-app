/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state,action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        }
    }
});

export const {add,remove} = CartSlice.actions;

export default CartSlice.reducer;