import React from 'react'

import { GiCheckMark } from "react-icons/gi";



const Ad = () => {
    return (
        <div className='flex justify-center mt-6 border-2 border-blue-800 w-[60%] m-auto hover:shadow-2xl ' >
            <div className='ml-2 px-6 '>
                <p className='font-semibold text-blue-800 text-2xl mt-2'>PakWheels <span className='text-red-500 font-semibold'>Car Inspection</span></p>
                <p className='mt-1'>Inspect the car on 200+ checkpoints</p>
                <div>
                    <div className='flex gap-4 mt-2'>
                        <p className='flex gap-2 '><span className='text-green-600 '><GiCheckMark /></span>
                            Engine</p>
                        <p className='flex gap-2 '><span className='text-green-600 '><GiCheckMark /></span>
                            Suspention</p>
                        <p className='flex gap-2 '><span className='text-green-600 '><GiCheckMark /></span>
                            Exterior</p>
                        <p className='flex gap-2 '><span className='text-green-600 '><GiCheckMark /></span>
                            Interior</p>

                    </div>
                    <button className='bg-green-600 text-white px-4 mt-4 rounded-sm  h-10'>Learn More</button>


                </div>

            </div>
            <div>
                <img src='https://wsa2.pakwheels.com/assets/inspection/inspection-car-rate-7b4ede752bdfc0e0cd08c3247e7e37a8.png'></img>
            </div>

        </div>
    )
}

export default Ad
