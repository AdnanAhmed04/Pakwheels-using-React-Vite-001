import React from 'react'

const Comp4 = (props) => {
    let arr = [{
        para: '', img: ''
    }]
    return (
        <div className='flex border boder-gray-300 px-4 py-4 w-[550px] h-32 rounded-md hover:shadow-md'>
            <div>
                <img className='w-36 ' src={props.imageUrl} alt="Description" />
            </div>

            <div className='px-4 '>
                <p className='text-blue-900 font-semibold'>PakWheels</p>
                <p className='font-semibold '>{props.paragraph}</p>
            </div>



        </div>
    )
}

export default Comp4
