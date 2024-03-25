import {configureStore} from '@reduxjs/toolkit'
// import Counter from '../components/Counter';
import CartSlice from './slices/CartSlice';

export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
});