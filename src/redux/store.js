import {configureStore} from '@reduxjs/toolkit'
// import Counter from '../components/Counter';
import CartSlice from './slices/CartSlice';

// counter App code 

// export const store = configureStore({
//     reducer: {
//         counter: CounterSlice
//     }
// })

export const store = configureStore({
    reducer: {
        cart: CartSlice
    }
});