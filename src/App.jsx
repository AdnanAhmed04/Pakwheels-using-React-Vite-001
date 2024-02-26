import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";



import Comp1 from './comp1'
import Comp2 from './comp2'
import Comp3 from './comp3'
import Comp4 from './comp4'
import Comp5 from './comp5'
import Ad from './ad'
import Batch from './batch';
import Comparisons from './Comparisons';
import Separe_parts from './separe_parts';
import Video from './video'
import Discussions from './Discussions'
import Get_app from './get_app';
import Footer from './footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp1 />
      <Comp2 />
      <Comp3 />

      <div className='flex  justify-center gap-6 mt-8'>


      </div>
      <div className='flex justify-start ml-[300px] mb-5'>
        <p className='font-semibold text-xl '>PakWheels Offerings
        </p>
      </div>

      <div className='flex flex-wrap justify-center gap-6  m-auto mb-12'>
        <Comp4 paragraph="SELL IT FOR ME"
          imageUrl="https://wsa3.pakwheels.com/assets/pw-sifm-logo-revamp-8e58a73b12c4bfcf4ad922472a471893.png"

        />
        <Comp4 paragraph="AUCTION SHEET VERIFICATION"
          imageUrl="https://wsa1.pakwheels.com/assets/pw-auction-sheet-revamp-9dba47372d85c3f0c994f59cdd51a82a.png"

        />
        <Comp4 paragraph="CAR INSPECTION"
          imageUrl="https://wsa2.pakwheels.com/assets/pw-inspection-revamp-548e215112ee531c6002fb21c9e26eb2.png"

        />
        <Comp4 paragraph="PARTNER WORKSHOP"
          imageUrl="https://wsa3.pakwheels.com/assets/pw-partner-workshop-revamp-a8542ad6cf18942775c20eb87d641210.png"

        />
        <Comp4 paragraph="CAR INSURANCE"
          imageUrl="https://wsa2.pakwheels.com/assets/pw-car-insurance-revamp-2d61670bc374062ecc001bc7744d37e3.png"

        />
        <Comp4 paragraph="CAR FINANCE"
          imageUrl="https://wsa3.pakwheels.com/assets/pw-car-finance-revamp-d1581a9a28491f8e63132a08b1a7a89e.png"

        />
        <Comp4 paragraph="CAR REGISTRATION"
          imageUrl="https://wsa4.pakwheels.com/assets/pw-car-registration-revamp-9a9404feb10c2c1f00558d792ffb3e8b.png"

        />
        <Comp4 paragraph="OWERSHIP TRASFER"
          imageUrl="https://wsa2.pakwheels.com/assets/pw-ownership-transfer-revamp-06fae7940d496424b227a1ee1a5c3a6e.png"

        />

      </div>
      <div className='bg-gray-100 h-[500px]'>
        <p className='ml-48 font-semibold text-xl mb-4 py-6'>Used Cars for Sale</p>
        <div className='flex justify-center gap-11 '>
          <button className=' '><FaChevronLeft /></button>
          <Comp5 title='Toyota Mark X'
            imglink="https://cache2.pakwheels.com/ad_pictures/9717/Slide_toyota-mark-x-250g-2-2005-97171928.webp"
            price='PKR PKR PKR 5,550,000'
            city='Islamabad'

          />
          <Comp5 title='Suzuki Wagon r Hybrid'
            imglink="https://cache1.pakwheels.com/ad_pictures/9521/tn_suzuki-wagon-r-hybrid-fx-2021-95218636.webp"
            price='PKR 3,300,000'
            city='Lahore'

          />
          <Comp5 title='Suzuki-Alto-VXL'
            imglink="https://cache3.pakwheels.com/ad_pictures/9562/Slide_suzuki-alto-vxl-2-2022-95623333.webp"
            price='PKR 2,935,000'
            city='Karachi'

          />
          <Comp5 title='Suzuki Swift'
            imglink="https://cache2.pakwheels.com/ad_pictures/9705/Slide_suzuki-swift-1-3l-dlx-2015-97056010.webp"
            price='PKR 2,050,000'
            city='Karachi'

          />
          <button className=' '><FaAngleRight />
          </button>

        </div>
      </div>
      <Ad />


      <div className='bg-gray-100 h-[500px]'>


        <p className='ml-48 font-semibold text-xl mb-4 mt-4 py-6'>New Cars for Sale</p>
        <div className='flex justify-center gap-11 '>
          <button className=' '><FaChevronLeft /></button>
          <Comp5 title='Toyota Corolla'
            imglink="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674"
            price='PKR 59.7 - 75.5'
            city='Available in all cities'

          />
          <Comp5 title='Suzuki Wagon r Hybrid fx 2021'
            imglink="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945"
            price='PKR 3,300,000'
            city='Available in all cities'

          />
          <Comp5 title='Suzuki-Alto-VXL'
            imglink="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100"
            price='PKR 2,935,000'
            city='Available in all cities'

          />
          <Comp5 title='Porsche Panamera 2014 S Hybrid '
            imglink="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254"
            price='PKR 3.3 Crore'
            city='Available in all cities'

          />
          <button className=' '><FaAngleRight />
          </button>

        </div>
      </div>

      <div className='bg-gray-200 h-[550px]'>
        <p className='ml-64 font-semibold text-xl py-6'>New Cars by Make
        </p>

        <div className='flex justify-center gap-20 mb-8 '>
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/041/resized/Suzuki.png"
            name='Suzuki' />
          <Batch imglink="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/042/resized/Tyota.png"
            name='Toyota' />
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/021/resized/kia.png"
            name='KIA' />
          <Batch imglink="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/014/resized/Honda.png"
            name='Honda' />
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/016/resized/hyundai.png"
            name='Hyundai' />
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/068/resized/1.jpg"
            name='Changan' />
        </div>
        <div className='flex justify-center gap-20 mb-8'>
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png"
            name='BMW' />
          <Batch imglink="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/053/resized/Audi.png"
            name='Audi' />
          <Batch imglink="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/027/resized/mercedes.png"
            name='Mercedes' />
          <Batch imglink="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/070/resized/porche.png"
            name='Porche' />
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/110/resized/Tesla.png"
            name='Tesla' />
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/114/resized/JMC.png"
            name='JMC' />
        </div>

        <div className='flex justify-center gap-20 mb-8 '>
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/102/resized/DFSK.png"
            name='DFSK' />
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/032/resized/peugeot.png"
            name='Peugot' />
          <Batch imglink="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/113/resized/United.png"
            name='United' />
          <Batch imglink="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/018/resized/Isuzu.png"
            name='Isuzu' />
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/080/resized/proton-logo-png-for-website.png"
            name='Proton' />
          <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/060/resized/580b57fcd9996e24bc43c498.png"
            name='MG' />
        </div>

        <div className='flex justify-center gap-20 mb-8 '>
          <Batch imglink="https://cache3.pakwheels.com/system/car_manufacturers/manufacturers/000/000/069/resized/car-logos_chery.png"
            name='Chery' />
          <Batch imglink="https://cache2.pakwheels.com/system/car_manufacturers/manufacturers/000/000/112/resized/JW-Forland.png"
            name='JW Forland' />
          <Batch imglink="https://cache4.pakwheels.com/system/car_manufacturers/manufacturers/000/000/111/resized/Daehan.png"
            name='Daehan' />

        </div>
      </div>

      <div>
        <Comparisons />
        <p className='font-semibold py-4 mt-8 bg-gray-200 px-[300px] text-2xl'>Auto Store Car Parts & Accessories</p>
        <div className='flex font-semibold text-md hover:cursor-pointer gap-12 px-[300px] bg-gray-200'>
          <p>Sub Category</p>
          <p>Make</p>
          <p>Model</p>
          <p>Brand</p>
        </div>

        <div className='flex justify-center gap-12 bg-gray-200 px-2'>
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/pressure-washers-6fcfc7f904618a4319f7ad2e3c52758e.png"
            info="Car Washer" />
          <Separe_parts imageUrl="https://wsa4.pakwheels.com/assets/accessory-sub-categories/tyres-3b79ded6d0b63b5dc6f0b615435bb3af.png"
            info="Tyres" />
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/helmets-7aafbc5e0b58a365c4a67f883fbccf11.png"
            info="Helmets" />
          <Separe_parts imageUrl="https://wsa4.pakwheels.com/assets/accessory-sub-categories/key-chains-9ad4edc2698e64293627b54b04fc00b7.png"
            info="Keychains" />
          <Separe_parts imageUrl="https://wsa1.pakwheels.com/assets/accessory-sub-categories/batteries-12aaa4846776db3cf29e513251a6cc9e.png"
            info="Car Battery" />
          <Separe_parts imageUrl="https://wsa3.pakwheels.com/assets/accessory-sub-categories/alloy-wheels-7fe30c2e51e6fcab6295450adcc2c3c7.png"
            info="Alloy Rims" />
        </div>
        <div className='flex justify-center gap-12 bg-gray-200 px-2'>
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/engine-oil-0092f153bce46e44b3c2a9c989734e56.png"
            info="Engine Oil" />
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/usb-car-charger-d1cd91a39025413d136ad918e6c2bbc9.png"
            info="Car Charger" />
          <Separe_parts imageUrl="https://wsa1.pakwheels.com/assets/accessory-sub-categories/microfiber-clothes-55090af86c11f49f1b7cd5f644a8d7f8.png"
            info="Microfiber Cloth" />
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/gps-trackers-b562681895d50c296b0ac8d9b18e7f3f.png"
            info="GPS Tracker" />
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/complete-engines-4f0ce5446e55a6c5526c845a29bbd83d.png"
            info="Engines For Sale" />
          <Separe_parts imageUrl="https://wsa2.pakwheels.com/assets/accessory-sub-categories/fuel-pump-480126710164f4d1abef2459a881f857.png"
            info="Fuel Pump" />
        </div>



      </div>
      <p className='text-2xl font-semibold ml-80'>New Bikes by Make</p>
      <div className='flex justify-center gap-20 mb-8'>
        <Batch imglink="https://cache1.pakwheels.com/system/car_manufacturers/manufacturers/000/000/003/resized/BMW.png"
          name='BMW' />
        <Batch imglink="https://cache1.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/016/resized/Honda.png"
          name='Honda' />
        <Batch imglink="https://cache3.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/005/resized/Suzuki.png"
          name='Suzuki' />
        <Batch imglink="https://cache2.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/003/resized/unique.png"
          name='Unique' />
        <Batch imglink="https://cache2.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/022/resized/crown.png"
          name='Crown' />
        <Batch imglink="https://cache4.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/002/resized/Yamaha.png"
          name='Yamaha' />
      </div>
      <div className='flex justify-center gap-20 mb-8'>
        <Batch imglink="https://cache2.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/010/resized/Road-prince.png"
          name='Road Prince' />
        <Batch imglink="https://cache3.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/035/resized/United.png"
          name='United' />
        <Batch imglink="https://cache2.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/030/resized/metro.png"
          name='Metro' />
        <Batch imglink="data:image/jpeg;base64,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"
          name='Evee' />
        <Batch imglink="https://cache3.pakwheels.com/system/bike_manufacturers/manufacturers/000/000/076/resized/jolta-icon.png"
          name='Jolta Electric' />

      </div>
      <div className='bg-gray-200'>
        <p>. </p>

        <p className='ml-40 text-xl font-semibold'>Popular New Bikes</p>
        <div className='flex justify-center gap-11 '>
          <button className=' '><FaChevronLeft /></button>
          <Comp5 title='Honda CD 70'
            imglink="https://cache2.pakwheels.com/system/bike_model_pictures/1349/medium/1.jpg?1665574167"
            price='PKR 157,900'
            city='Available in all cities'

          />
          <Comp5 title='Honda CG 125'
            imglink="https://cache1.pakwheels.com/system/bike_model_pictures/1374/medium/1.jpg?1665655628"
            price='PKR 234,900'
            city='Available in all cities'

          />
          <Comp5 title='Suzuki-GS 150'
            imglink="https://cache1.pakwheels.com/system/bike_model_pictures/1403/medium/1.jpg?1666261928"
            price='PKR 382,000'
            city='Available in all cities'

          />
          <Comp5 title='Yamaha YBR 125'
            imglink="https://cache1.pakwheels.com/system/bike_model_pictures/1329/medium/1.jpg?1665554161"
            price='PKR 466,000'
            city='Available in all cities'

          />
          <button className=' '><FaAngleRight />
          </button>
        </div>
        <p>. </p>

      </div>
      <div className='mt-8'>
        <p className='text-xl font-semibold ml-48'>Browse Our Videos</p>
        <Video />

      </div>
      <Discussions />
      <Get_app />
      <Footer />



    </>
  )
}

export default App
