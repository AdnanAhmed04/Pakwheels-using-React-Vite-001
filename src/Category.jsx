import React from 'react'

const Category = (props) => {

    const { value, imgsrc } = props
    const { img } = imgsrc
    return (
        <div className=' bg-white px-4 rounded-md w-40 h-28 gap-4 flex flex-col items-center hover:shadow-2xl hover:font-semibold'>
            <img className='w-20 h-16' src={imgsrc?.img} alt="" />

            <p>{value}</p>
        </div>
    )
}

export default Category
