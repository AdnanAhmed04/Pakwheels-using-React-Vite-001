import React from 'react'

const Comp5 = (props) => {
    let my_arr = [{
        img: '',
        title: '',
        price: '',
        contry: ''
    }]
    return (
        <div className=' w[100%]'>
            <div className=' hover:shadow-lg'>
                <div className='rounded-md border-4'>
                    <img className='w-[255px] h-[250px] rounded-md ' src={props.imglink} alt="Description" />
                    <p className='font-semibold px-2'>{props.title}</p>
                    <p className='text-green-700 font-semibold px-2'>{props.price}</p>
                    <p className='px-2'>{props.city}</p>

                </div>

            </div>
        </div>

    )
}

export default Comp5
