import React from 'react'
import Delivey from '../../assets/Img/delivery.png'
import HeroBg from '../../assets/Img/heroBg.png'

const HomeContainer = () => {
  return (
    <section className='grid grid-flow-cols-1 md:grid-cols-2 gap-2 w-full ' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-6'>
      <div className='flex items-center gap-12 justify-center bg-orange-100 px-4 py-1 rounded-full'>
       <p className='text-base text-orange-500 font-semibold '>Bike Delivery </p>
       <div className='w-6 h-6 rounded-full bg-white overflow-hidden drop-shadow-xl'>
        <img src={Delivey} className='w-full h-full  object-contain ' alt="delivery" />
        </div> 
      </div>

      <p className=' text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold tracking-normal text-headingColor'>The Fatest Delivery in <span className='text-orange-500 text-[3rem] md:text-[3.5rem] lg:text-[4.5rem]'>Dhaka</span></p>

      <p className='text-base text-textColor  md:text-left md:w-[80%]'>Craving something delicious? Order from <span className='text-orange-600 font-semibold '>DishDash</span> for a hassle-free dining experience. Explore a wide selection of mouthwatering dishes, delivered promptly to your doorstep. With easy online ordering and fast delivery, satisfy your hunger and enjoy a tasty meal without leaving home. Order now!</p>
      <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 md:w-auto w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>Order Now</button>
    </div>


    <div className='py-2 flex-1 flex items-center '>
            <img src={HeroBg} className='lg:h-[86vh] h-420 lg:w-auto w-[100vw]  ml-auto  ' alt="Hero Bg" />
            <div className='w-full  h-full absolute flex items-center justify-center'>

            </div>
    </div>
  </section>
  )
}

export default HomeContainer