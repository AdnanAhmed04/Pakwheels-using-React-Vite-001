import React from 'react'

const Get_app = () => {
    return (
        <div className='flex justify-center '>
            <div className='w-96 mt-4'>
                <p className='text-3xl font-semibold text-blue-900 mb-4'>
                    Get The PakWheels App
                </p>
                <p>Buy & Sell Cars, Bikes and Auto Parts faster and better
                    using our App</p>
                <div className='flex gap-2 mt-2'>
                    <img className='w-28 h-16 hover:cursor-pointer' src='https://wsa4.pakwheels.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg'></img>
                    <img className='w-28 h-16 hover:cursor-pointer' src='https://wsa4.pakwheels.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg'></img>
                    <img className='w-28 h-16 hover:cursor-pointer' src='https://wsa4.pakwheels.com/assets/google-play-badge-f4bed6cbd8a3a1be7c79377c4441447a.svg'></img>
                </div>
            </div>
            <div className='flex'>
                <img className='w-32' src='https://wsa3.pakwheels.com/assets/promotion-app/app-install-qr-code-281c1dc2396c1735eadfe5f80c020673.svg'></img>

                <img className='w-24' src='https://wsa4.pakwheels.com/assets/promotion-app/scanner_arrow-e49b64a6868f7f501b191d7b984c4268.svg'></img>

                <div className=' mt-32 -ml-5 w-32'>
                    <p>Scan the QR
                        to get the App</p>
                </div>

            </div>
            <div>
                <img className='w-48 mt-4' src="https://play-lh.googleusercontent.com/NrTdlSFcCkWg96qdKO1686mXwQsN-nLUB9v-4TGFD_78GnA44_KtCj5FCRz1RSnnKQ4=w2560-h1440-rw" alt="" srcset="" />
            </div>
        </div>

    )
}

export default Get_app