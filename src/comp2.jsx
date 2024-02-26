import React from 'react'
import './App.css'



import { GiCheckMark } from "react-icons/gi";


function Comp2() {
    return (
        <div>
            <div>
                <p className='text-2xl font-bold bg-white absolute top-[520px] left-[500px] w-[600px]'>
                    Sell Your Car on PakWheels and Get the Best Price
                </p>
            </div>
            <div>

                <div className='gap-32 border-2 border-gray-200 w-[1000px] ml-64 mt-16
                h-[200px] flex items-center justify-center  mb-12'>
                    <div className=''>

                        <p>Post your Ad on PakWheels</p>

                        <div className='flex '>
                            <p className='py-1 text-green-500'><GiCheckMark /></p>
                            <p className='px-2 '>Post your Ad for Free in 3 Easy Steps</p>
                        </div>
                        <div className='flex '>
                            <p className='py-1 text-green-500'><GiCheckMark /></p>
                            <p className='px-2 '>Get Genuine offers from Verified Buyers</p>
                        </div>
                        <div className='flex '>
                            <p className='py-1 text-green-500'><GiCheckMark /></p>
                            <p className='px-2 '>Sell your car Fast at the Best Price</p>
                        </div>
                        <button className='bg-red-700 text-white px-9 py-1 h-11 w-48 flex justify-items-start rounded-md text-xl mt-4'>Post Your Ad</button>

                    </div>
                    <div className='vl'>
                        <p className='unique-para'>OR</p>
                    </div>
                    <div className=''>

                        <p>Try PakWheels Sell It For Me</p>

                        <div className='flex '>
                            <p className='text-green-500 py-1'><GiCheckMark /></p>
                            <p className='px-2 '>Dedicated Sales Expert to Sell your Car</p>
                        </div>
                        <div className='flex '>
                            <p className='py-1 text-green-500'><GiCheckMark /></p>
                            <p className='px-2 '>We Bargain for you and share the Best Offer</p>
                        </div>
                        <div className='flex '>
                            <p className='py-1 text-green-500'><GiCheckMark /></p>
                            <p className='px-2 '>We ensure Safe & Secure Transaction</p>
                        </div>
                        <button className='bg-blue-500 text-white px-9 py-1 h-11 w-58 flex justify-items-start rounded-md text-xl mt-4'>Regester Your Car</button>

                    </div>

                </div>
                <div className='flex justify-center mb-12'>
                    <img src='https://tpc.googlesyndication.com/simgad/7081964232892992776'></img>
                </div>


                <p className='text-white'>.</p>


            </div>

        </div>
    )
}

export default Comp2
