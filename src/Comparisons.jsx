import React from 'react'

const Comparisons = () => {
    return (
        <div className='mt-8 h-[240px] ml-64'>
            <div className='flex justify-between w-[700px]'>
                <p className='font-semibold text-2xl'>Car Comparisons</p>
                <p className=' text-blue-600 hover:underline hover:cursor-pointer'>All Car Comparisons</p>

            </div>


            <div className='border-2 border-gray-200 mt-2 w-[700px] h-[220px]'>
                <div className='flex justify-center gap-8  w-[700px]'>
                    <div className='flex justify-center'>
                        <div>
                            <img className='w-52' src="https://cache3.pakwheels.com/system/car_generation_pictures/2464/medium/1.jpg?1433331089" alt="" srcset="" />
                        </div>
                        <p className='py-20 text-red-500 text-2xl'>VS</p>
                        <div className=''>
                            <img className='w-52' src="https://cache2.pakwheels.com/system/car_generation_pictures/6423/medium/Toyota_Camry_Front.jpg?1651129122" alt="" srcset="" />
                        </div>
                    </div>

                    <div>
                        <div className='m-4'>
                            <p className='font-semibold hover:text-blue-800'> Changan Alsvin</p>
                            <p className='text-red-600 ml-8'>VS</p>
                            <p className='font-semibold hover:text-blue-800'>Honda City</p>

                        </div>
                        <hr className='text-black'></hr>
                        <div className='m-4'>
                            <p className='font-semibold hover:text-blue-800'>Changan Alsvin</p>
                            <p className='text-red-600 ml-8'>VS</p>
                            <p className='font-semibold hover:text-blue-800'>Honda City</p>

                        </div>
                    </div>


                </div>
                <div className='flex justify-start ml-28 gap-36 -mt-16 font-semibold'>
                    <p className='hover:text-blue-800'>Audi A6</p>
                    <p className='hover:text-blue-800'>Toyota Camry</p>

                </div>
                <div className='mt-4 '>
                    <button className='border-2 border-blue-700 px-4 w-96 ml-20 mb-4 hover:text-blue-800 rounded-sm'>Veiw Comparison</button>
                </div>

            </div>
        </div>
    )
}

export default Comparisons
