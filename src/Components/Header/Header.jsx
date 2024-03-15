import React from 'react'
import logo from '../../assets/Img/logo.png'
import { MdShoppingBasket } from "react-icons/md";

const Header = () => {
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop and tablet */}
            <div className='hidden md:flex w-fullp-4'>
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </div>
                <ul className='flex items-center gap-8 ml-auto'>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                </ul>
                <div className='relative flex items-center justify-center'>
                <MdShoppingBasket className='text-textColor text-2xl ml-8 cursor-pointer' />
                <div className=' absolute -top-3 -right-2 h-6 w-7 rounded-full bg-cartNumBg flex items-center justify-center'>
                    <p className='text-sm  text-white font-semibold'>120</p>
                </div>
                </div>
            </div>
            {/* {mobile} */}
            <div className='flex md:hidden w-full h-full p-4'>

            </div>
        </header>
    )
}

export default Header