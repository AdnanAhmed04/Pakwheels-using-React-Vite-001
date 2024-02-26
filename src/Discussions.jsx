import React from 'react'

const Discussions = () => {
    return (
        <div className='bg-gray-200 h-[350px]'>
            <p className='ml-48 text-xl py-4 font-semibold mt-8 mb-2'>News, Reviews & Discussions</p>

            <div className='flex gap-10 ml-48'>
                <p className='text-md font-semibold'>Automotive News</p>
                <p className='text-md font-semibold'>Car Reviews</p>
                <p className='text-md font-semibold'>Discussions</p>

            </div>
            <div className='ml-48'>
                <div className='flex gap-4 border border-gray-400 w-[800px] mb-8 rounded-md'>
                    <div>
                        <img className='w-96 h-24' src='https://static.pakwheels.com/2024/02/maxresdefault-1.jpg'></img>

                    </div>
                    <div>
                        <p className='text-sm'>New Metro Routes Hindered After Shipping Delays</p>
                        <p className='text-sm'>February 23, 2024</p>
                        <p className='text-sm'>The anticipation for a new metro routes in the federal capital has hit a snag as the arrival of the first batch of 30 electric buses from China faces delays due to shipping vessel unavailability. This setback has impacted the planned rollout of the</p>

                    </div>
                </div>
                <div className='flex gap-4 border border-gray-400 w-[800px] rounded-md'>
                    <div>
                        <img className='w-96 h-24' src='https://static.pakwheels.com/2023/05/y1.jpg'></img>

                    </div>
                    <div>
                        <p className='text-sm'>Toyota Pakistan’s Profit Surges by 89% in FY24</p>
                        <p className='text-sm'>February 23, 2024</p>
                        <p className='text-sm'>Toyota Pakistan has emerged with impressive financial results for the first half of the fiscal year 2024, as announced today. The company posted a profit after tax of Rs. 4.95 billion, marking a substantial 89 percent increase Year-on-Year (YoY). This</p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Discussions
