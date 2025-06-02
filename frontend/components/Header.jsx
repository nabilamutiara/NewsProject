import React from 'react';
import moment from 'moment';
import {FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../assets/logo.png'
import adver_image from '../assets/add.png'
import bg_header from '../assets/header-bg.jpg'
import Image from 'next/image';
import Header_Category from './Header_Category';
import HeadLines from './HeadLines';

const Header = () => {
    
    return (

        <header className='bg-[#333333] text-[#cccccc]'>
            <div className='px-5 lg:px-8 flex justify-between items-center py-2 border-b border-[#444444]'>
                <span className='text-sm font-medium'>{moment().format('LLLL')}</span>
                <div className='flex space-x-2'>
                    <a 
                        href="#" 
                        className='w-8 h-8 flex justify-center items-center bg-[#1877F2] rounded-full hover:bg-slate-500 transition duration-200'
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href="#" 
                        className='w-8 h-8 flex justify-center items-center bg-[#5271ff] rounded-full hover:bg-slate-500 transition duration-200'
                    >
                        <FaTwitter />
                    </a>
                    <a 
                        href="#" 
                        className='w-8 h-8 flex justify-center items-center bg-[#ff5157] rounded-full hover:bg-slate-500 transition duration-200'
                    >
                        <FaYoutube />
                    </a>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${bg_header.src})` }}
                className='bg-cover bg-center text-center py-6'
                >
                <div className='px-5 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
                    
                    <div className='flex flex-col items-center md:items-start space-y-3'>
                        <Image 
                            className='w-[200px] h-auto'
                            alt='logo'
                            src={logo}
                            priority
                        />
                        <h2 className='text-[#cccccc] text-md md:text-md font-semibold tracking-wide text-center md:text-left'>
                            Media that rocks your world
                        </h2>
                    </div>
                    <div className='hidden md:block'>
                        <Image 
                            className='max-w-full h-auto'
                            alt='advertisement'
                            src={adver_image}
                            priority
                        />
                    </div>
                </div>
            </div>
        
        <Header_Category/>
        <HeadLines/>
        
        </header>
    );
};

export default Header;
