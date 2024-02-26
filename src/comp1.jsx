import React from 'react'
import './App.css'


import { FaMobileAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";






const Comp1 = () => {
    return (
        <div className='bg-gradient-to-b from-black to-blue-900'>
            <div className='flex justify-around  w-[1100px] mr-auto ml-auto gap-[700px]'>
                <div className='flex text-white gap-2 mt-2 '>
                    <span className='text-red-500 text-2xl '><FaMobileAlt />
                    </span>
                    <p className='special'>Download App via SMS</p>

                </div>
                <div className='flex  gap-4 text-white mt-2'>
                    <p className='text-red-500 special' >اردو</p>
                    <p className='text-gray-400	 special'>|</p>
                    <p className='special'>Sign Up</p>
                    <p className=' text-gray-400 special'>|</p>
                    <p className='special'>Sign In</p>
                </div>
            </div>
            <hr className='text-gray-800 mt-4 mb-4 ml-auto mr-auto h-1 w-[1100px]'></hr>
            <div className='flex  justify-center'>
                <div className='mr-36'>
                    <img className='w-40 special gap-4' src='https://wsa1.pakwheels.com/assets/new-pw-logo-white-b8b4c00b25fde9cc8f514dc4947c266a.svg'></img>
                </div>
                <div className='flex gap-6 text-white'>
                    <div className='flex special'>
                        <p className='py-3'>Used Car</p>

                        <p className='py-4  h-10  '><IoMdArrowDropdown /></p>
                    </div>
                    <div className='flex special'>
                        <p className='py-3'>New Car</p>

                        <p className='py-4  h-10 '><IoMdArrowDropdown /></p>
                    </div>

                    <div className='flex special'>
                        <p className='py-3'>Bikes</p>

                        <p className='py-4  h-10 '><IoMdArrowDropdown /></p>
                    </div>
                    <div className='flex special'>
                        <p className='py-3'>AutoStore</p>

                        <p className='py-4  h-10 '><IoMdArrowDropdown /></p>
                    </div>
                    <p className='py-3 special'>Videos</p>
                    <p className='py-3 special'>Forums</p>
                    <p className='py-3 special'>Blogs</p>
                    <p className='py-3 special'>More</p>
                    <button className='bg-red-500 px-3 rounded'>Post an Ad</button>
                </div>

            </div>
            <div>
                <div className='mt-20 text-center	'>
                    <p className='text-white text-4xl'>Find Used Cars in Pakistan</p>
                    <p className='text-white '>With thousands of cars, we have just the right one for you</p>
                </div>
                <div className='flex justify-center mt-6 mb-10'>
                    <div>
                        <input type="text" className='px-2 rounded-l-md h-10   border-r-2 w-96' placeholder='Car Make or Model' />

                    </div>

                    <div className='flex'>
                        <input type="text" className='px-2  h-10 w-64 border-gray-400 ' placeholder='All Cities' />
                        <p className='special py-4 h-10 bg-white border-r-2 '><IoMdArrowDropdown /></p>
                    </div>

                    <div className='flex'>
                        <input type="text" className='px-2  h-10 w-60 border-gray-400 ' placeholder='All Cities' />
                        <p className='special py-4 px-4 h-10 bg-white border-r-2 '><IoMdArrowDropdown /></p>
                        <button className='bg-green-500 rounded-r-md w-16 flex justify-center item-center px-2 py-3'><FaSearch /></button>

                    </div>

                </div>
                <div className="flex justify-center items-center  mb-14">
                    <div className='special flex items-center justify-center border-white border-2 text-white w-40'>
                        <p>Advanced Filter</p>
                        <p className='py-1'><b><MdKeyboardArrowRight /></b></p>
                    </div>
                </div>
                <p>.</p>

            </div >

        </div >
    )
}

export default Comp1
