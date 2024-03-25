/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'

function Cart({ post }) {

    const { cart } = useSelector((state) => state);
    console.log(cart);

    const [totalAmount, setTotalAmout] = useState(0);

    useEffect(() => {
        setTotalAmout(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])


    return (
        <div className='max-w-5xl mx-auto mt-10 mb-10 h-full overflow-x-hidden'>
            {
                cart.length > 0
                    ? (
                        <div className='flex lg:justify-evenly md:flex-row md:justify-center lg:flex-row flex-col mx-auto w-full'>
                            <div className='min-h-[80vh] h-full lg:w-[600px] md:w-[450px] sm:w-[400px] lg:ml-10 md:ml-10 sm:mx-auto'>
                                {
                                    cart.map((item, itemIndex) => (
                                        <CartItem key={item.id} item={item} itemIndex={itemIndex} />
                                    ))
                                }
                            </div>

                            <div className='flex flex-col justify-between lg:w-full md:w-full sm:w-[550px] sm:mt-32 sm:mx-auto lg:ml-10 md:ml-10 lg:mt-10 md:mt-10 lg:mr-10 md:mr-10 lg:mb-0 md:mb-0 sm:mb-0 w-[300px] mx-auto'>
                                <div>
                                    <div className='uppercase font-semibold text-green-500 mt-10'>Your Cart</div>
                                    <div className='uppercase font-extrabold text-4xl text-green-600 sm:mb-10 mb-10'>Summary</div>
                                    <p className='mt-2'>
                                        <span >Total Items: {cart.length}</span>
                                    </p>
                                </div>

                                <div className='mb-10'>
                                    <p className='mb-4'>Total Amount:<span className='font-extrabold'>${Number(totalAmount).toFixed(2)}</span></p>
                                    <button className='bg-green-600 pt-1 pb-1 pl-10 pr-10 w-full text-white font-semibold rounded-[4px]'>
                                        Checkout Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div className='h-full flex flex-col justify-center items-center space-y-2'>
                            <h1 className='font-semibold'>Cart Empty</h1>
                            <NavLink to="/">
                                <button className='bg-green-600 pt-1 pb-1 pl-10 pr-10 w-full text-white font-semibold rounded-[4px]'>
                                    Shop Now
                                </button>
                            </NavLink>
                        </div>
                    )
            }
        </div>
    )
}

export default Cart
