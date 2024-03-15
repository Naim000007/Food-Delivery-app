import React from 'react';
import logo from '../../assets/Img/logo.png';
import avatar from '../../assets/Img/avatar.png';
import { MdShoppingBasket } from "react-icons/md";
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

    // Function to handle login
    const login = async () => {
        try {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
            
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } catch (error) {
            if (error.code === 'auth/cancelled-popup-request') {
                console.log('User cancelled the login popup');
            } else {
                console.error('Error occurred during login:', error);
            }
        }
    };
    
    return (
        <header className='fixed z-50 w-screen p-6 px-16'>
            {/* desktop and tablet */}
            <div className='hidden md:flex w-full p-4 h-full items-center justify-between '>
                <Link to={'/'} className='flex items-center gap-2'>
                    <img src={logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>City</p>
                </Link>
                <div className='flex items-center gap-8'>
                    {/* Your navigation items */}
                    <ul className='flex items-center gap-8 '>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">About Us</li>
                        <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">Service</li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <MdShoppingBasket className='text-textColor text-2xl  cursor-pointer' />
                        <div className=' absolute -top-5 -right-2 h-6 w-7 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-sm  text-white font-semibold'>2</p>
                        </div>
                    </div>
                    <div className='relative '>
                        <motion.img whileTap={{scale: 0.6}} src={user ? user.photoURL : avatar} alt="userimg" onClick={login} className='w-10   min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer rounded-full' />
                    </div>
                </div>
            </div>
            {/* {mobile} */}
            <div className='flex md:hidden w-full h-full p-4'>
                {/* Your mobile navigation */}
            </div>
        </header>
    );
};

export default Header;
