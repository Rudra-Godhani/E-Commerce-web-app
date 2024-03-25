/* eslint-disable no-unused-vars */
import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaShop } from "react-icons/fa6";
import { MdShop } from "react-icons/md";

function Navbar() {
    const { cart } = useSelector((state) => state);
    return (
        <div className='h-full'>
            <nav className='flex justify-between items-center h-20 max-w-5xl mx-auto'>
                <NavLink to='/'>
                    <div className='ml-5'>
                        {/* <img src="logo.png" className="h-14" /> */}
                        <div className='flex justify-center items-center text-green-700 text-[25px]'>
                            <MdShop className='font-extrabold size-16 ' />
                            <div>
                                <p className=''>ECOMZY</p>
                                <div className='h-[1px] bg-green-700 w-[115px] ml-[2px]'></div>
                                <p className='text-[8px] ml-[2px]'>shop with ease,only on Ecomzy.</p>
                            </div>
                        </div>
                    </div>
                </NavLink>

                <div className='flex font-medium items-center text-slate-100 mr-5 space-x-6'>
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to='/cart'>
                        <div className='relative'>
                            <FaShoppingCart className='text-2xl' />
                            {
                                cart.length > 0 &&
                                <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex items-center justify-center animate-bounce rounded-full'>{cart.length}</span>
                            }

                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
