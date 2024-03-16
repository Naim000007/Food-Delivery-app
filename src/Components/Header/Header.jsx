import React, { useState } from 'react';
import logo from '../../assets/Img/logo.png';
import avatar from '../../assets/Img/avatar.png';
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from 'firebase/app';
import firebaseConfig from "../../../firebase.config";
import { useStateValue } from '../../Context/StateProvider';
import { actionType } from '../../Context/Reducer';

const Header = () => {
    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);

    // Get Firebase services instances
    const firestore = getFirestore(app);
    const storage = getStorage(app);
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{ user }, dispatch] = useStateValue();
    const [isMenu, setisMenu] = useState(false);

    // Function to handle login
    const login = async () => {
        if (!user) {

            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);

            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        }
        else {
            setisMenu(!isMenu);
        }



    }


    return (
        <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16'>
            {/* desktop and tablet */}
            <div className='hidden md:flex w-full p-4 h-full items-center justify-between '>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='flex items-center gap-8'>
                    {/* Your navigation items */}
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8 '>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                    </motion.ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
                        <div className=' absolute -top-5 -right-2 h-6 w-7 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-sm  text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative '>
                        <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : avatar} alt="userimg" onClick={login} className='w-10   min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full' />
                        {
                            isMenu && (
                                <div className='w-40 bg-gray-100 shadow-xl roundedllg flex flex-col absolute top-12 right-0 px-4 py-2'>
                                    {
                                        user && user.email === "mdnaim01910423877@gmail.com" && (
                                            <Link to='/createItem'>
                                                <p className=' py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                            </Link>
                                        )
                                    }
                                    <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>Log Out  <MdLogout /></p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            {/* {mobile} */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                {/* Your mobile navigation */}
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='relative '>
                    <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : avatar} alt="userimg" onClick={login} className='w-10   min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full' />
                    {
                        isMenu && (
                            <div className='w-40 bg-gray-100 shadow-xl roundedllg flex flex-col absolute top-12 right-0 px-4 py-2'>
                                {
                                    user && user.email === "mdnaim01910423877@gmail.com" && (
                                        <Link to='/createItem'>
                                            <p className='px-4 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base'>New Item<MdAdd /></p>
                                        </Link>
                                    )
                                }
                                <ul

                                    className='flex flex-col px-4 py-4 gap-3'>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100">Home</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">Menu</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">About Us</li>
                                    <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100">Service</li>
                                </ul>
                                <p className=' flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base px-4 '>Log Out  <MdLogout /></p>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
