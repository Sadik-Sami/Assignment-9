import React from 'react';
import socialImg from '../assets/Icons/social.png'
const Footer = () => {
    return (
        <div className='bg-[#1A1919] w-full'>
            <div className='my-container grid lg:grid-cols-5 font-manrope text-white'>
                <div>
                    <h1 className='font-extrabold text-4xl tracking-tighter'>JobHub</h1>
                    <p className='opacity-40 py-2'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img src={socialImg} alt="" />
                </div>
                <div>
                    <h1 className='font-extrabold text-xl tracking-tighter'>Company</h1>
                    <ul className='opacity-40 space-y-2 mt-2'>
                        <li>About Us</li>
                        <li>Work</li>
                        <li>Latest News</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-extrabold text-xl tracking-tighter'>Product</h1>
                    <ul className='opacity-40 space-y-2 mt-2'>
                        <li>Prototype</li>
                        <li>Plans&Pricing</li>
                        <li>Customers</li>
                        <li>integrations</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-extrabold text-xl tracking-tighter'>Support</h1>
                    <ul className='opacity-40 space-y-2 mt-2'>
                        <li>Help Desk</li>
                        <li>Sales</li>
                        <li>Become a Partner</li>
                        <li>Developers</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-extrabold text-xl tracking-tighter'>Contact</h1>
                    <ul className='opacity-40 space-y-2 mt-2'>
                        <li>524 Broadway , NYC</li>
                        <li>+1 777 - 978 - 5570</li>
                    </ul>
                </div>
            </div>
            <div className='bg-gray-600 w-full h-[2px] my-container !p-0 mx-auto'></div>
            <div className='mx-auto my-container text-white opacity-30 flex justify-between'>
                <p>@2023 JobHub. All Rights Reserved</p>
                <p>Powered by JobHub</p>
            </div>

        </div>
    );
};

export default Footer;