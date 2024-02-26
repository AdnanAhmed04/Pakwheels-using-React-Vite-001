import React from 'react'

const Batch = (props) => {
    return (
        <div className='flex flex-col justify-center items-center hover:cursor-pointer hover:text-blue-500'>
            <img className='w-16 h-16 rounded-full bg-white hover:cursor-pointer' src={props.imglink} alt="Description" />
            <p className=''>{props.name} </p>

        </div>
    )
}

export default Batch
