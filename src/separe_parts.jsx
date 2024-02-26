import React from 'react'

const Separe_parts = (props) => {
    return (
        <div className='mt-2 hover:cursor-pointer h-40 mb-4 bg-white rounded-md w-30'>

            <img className='w-28 h-32 ml-3 mr-2' src={props.imageUrl} alt="Description" />
            <p className='flex justify-center ml-3 mr-2'>{props.info}</p>
        </div >
    )
}

export default Separe_parts
