import React from 'react'

import Category from './Category'


const Comp3 = () => {
    let data = [
        {
            name: "Automatic cars",
            img: { img: "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-automatic-bf29d6ed2c67432d0afa6a4cca8e6e5a.svg" }
        }, {
            name: "Family Cars",
            img: { img: "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-family-cars-078acff5b2ef6aa9c056f6bade993f30.svg" }
        }, {
            name: "Big cars",
            img: { img: "https://wsa1.pakwheels.com/assets/browse-more/car-ctg-big-f4544cb27849733ec3913cb6ad1de0f8.svg" }
        }
        , {
            name: "5 Seater",
            img: { img: "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-5-seater-e963f64a695358e45eb77bb7e88a971b.svg" }
        }, {
            name: "Small cars",
            img: { img: "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-small-f7a95153caa90855afe96e6b0510e9fe.svg" }
        }, {
            name: "Imported cars",
            img: { img: "https://wsa1.pakwheels.com/assets/browse-more/car-ctg-imported-9490d70681ac77a13a0d0944bc9839cc.svg" }
        }, {
            name: "4 Door",
            img: { img: "https://wsa3.pakwheels.com/assets/browse-more/car-ctg-4-door-e963f64a695358e45eb77bb7e88a971b.svg" }
        }, {
            name: "Old Cars",
            img: { img: "https://wsa3.pakwheels.com/assets/browse-more/car-ctg-old-87229a52499cbdd0814e352ad8d3ae40.svg" }
        }
        , {
            name: "1300cc cars",
            img: { img: "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-1300cc-cars-98fe0baa7b3171f120ab5c0fa8a8cdc1.svg" }
        }, {
            name: "1000cc cars",
            img: { img: "https://wsa4.pakwheels.com/assets/browse-more/car-ctg-1000cc-cars-c024e94ac3fb686ea9d6c75fa23510e3.svg" }
        }, {
            name: "5 Door",
            img: { img: "https://wsa3.pakwheels.com/assets/browse-more/car-ctg-5-door-90782ef7fc48acfd0e5cb12d4c5af133.svg" }
        }
        , {
            name: "Japanese cars",
            img: { img: "https://wsa2.pakwheels.com/assets/browse-more/car-ctg-japanese-6fb37c0e61142fc12af2b2e73a2a11ff.svg" }
        }
    ]
    return (

        <div className='bg-gray-200'>
            <p className='flex justify-start ml-72 font-medium mb-6  text-2xl'>Browse Used Cars
            </p>
            <div className='flex gap-12 justify-start ml-72'>
                <p className='font-medium'>Category</p>
                <p className='font-medium'>City</p>
                <p className='font-medium'>Make</p>
                <p className='font-medium'>Model</p>
                <p className='font-medium'>Budget</p>
                <p className='font-medium'>Body Type
                </p>




            </div>
            <div className='flex flex-wrap gap-5 bg-gray-200 justify-center items-center w-[80%] mt-6 mb-10 m-auto'>
                {
                    data?.map((element, index) => {
                        // console.log(element, index)
                        return (
                            <>
                                <Category value={element?.name} imgsrc={element?.img}></Category>
                            </>
                        )
                    })
                }

            </div>
            <p className='text-gray-200'>.</p>
        </div >
    )
}

export default Comp3