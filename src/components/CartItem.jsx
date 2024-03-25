/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { remove } from '../redux/slices/CartSlice'

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div>
      <div className='lg:flex md:flex lg:flex-row md:flex-row flex flex-col lg:items-center md:items-center md:h-[250px] lg:h-[250px] sm:h-[450px] h-[500px] sm:mt-0 mt-10 border-b-2 border-b-gray-400 mx-5'>

        <div className='lg:h-[170px] md:h-[170px] sm:h-[200px] sm:w-[170px] lg:w-[170px] md:w-[170px] h-[250px] w-[200px] mx-auto'>
          <img src={item.image} className='w-full h-full sm:mt-4'/>
        </div>

        <div className='lg:w-[600px] md:w-[600px] sm:w-[600px] sm:ml-10 md:ml-10 lg:ml-10 mx-auto'>
          <h1 className='font-semibold text-gray-700 w-[300px] mt-[30px]'>{item.title}</h1>
          <h1 className='text-gray-600 font-normal text-sm text-left w-[300px] mt-[15px]'>{item.description.split(" ").slice(0, 20).join(" ") + "..."}</h1>
          {/* <h1 className='text-gray-600 font-normal text-sm text-left w-[300px] mt-[15px]'>
            {item.description}</h1> */}
          <div className='flex justify-between w-[300px] mt-[20px] mb-[30px]'>
            <p className='text-green-600 font-semibold '>${item.price}</p>
            <div className='bg-red-300 text-xs w-6 h-6 flex items-center justify-center rounded-full' onClick={removeFromCart}>
              <MdDelete className='text-[15px]' />
            </div>
          </div>
        </div>

      </div>

      {/* <div className='border border-gray-400'></div> */}
    </div>
  )
}

export default CartItem
