import React, { useState } from 'react';
import { SlArrowDown } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { CiGps } from "react-icons/ci";



const Heder = () => {
    const [toggle, settoggle] = useState(false)
    const sidemenue = () => {
        settoggle(true);
    }
    const removetoggle = () => {
        settoggle(false);
    }
    const link = [
        {
            icon: <IoIosSearch />,
            name: "search"
        },
        {
            icon: <BiSolidOffer />,
            name: "offer",
            sup: "new"
        },
        {
            icon: <IoHelpCircleOutline />,
            name: "Help"
        },
        {
            icon: <FaRegUser />,
            name: "Sign IN"
        },
        {
            icon: <CiShoppingCart />,
            name: "Cart",
            sup: 2
        },
    ]

    return (
        <>
            <div className='overlay w-full h-full fixed z-20' onClick={removetoggle} style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div className='h-full w-[500px] bg-white absolute duration-[400ms]' onClick={(e) => {
                    e.stopPropagation();
                }}
                    style={{
                        left: toggle ? '0%' : '-100%'
                    }}>
                    <div className='mx-auto w-[50%] mt-16 flex flex-col gap-5'>
                        <div>
                            <IoClose fontSize={30} onClick={removetoggle} className='cursor-pointer' />
                        </div>
                        <div>
                            <input type='text' className='w-[17dvw] p-3 border-[2px] outline-none focus:drop-shadow-3xl' placeholder={'search for the area, and street name'} />
                        </div>
                        <div className='flex flex-row border-[2px] w-[17dvw] p-2 gap-3 outline-none '>
                            <div><CiGps className='inline' /></div>
                            <div className='flex flex-col'>
                                <span>Get Current Location</span>
                                <span className='font-light'>Using GPS</span>
                            </div>
                        </div>

                    </div>

                </div>


            </div >
            <div className='p-[15px] shadow-xl'>
                <div className='max-w-[1320px] mx-auto flex items-center'>
                    <div className='w-[100px]'>
                        <img src='image/swiggelogo.png' className='w-full hover:scale-110' alt='reload'></img>
                    </div>
                    <div className='hover:text-yellow-700 cursor-pointer'>
                        <span className='border-b-2 border-black hover:border-yellow-800'>Ratanada</span>Jodhpur Rajeshthan, India <SlArrowDown fontSize={16} className='inline text-yellow-800 cursor-pointer' onClick={sidemenue} />

                    </div>
                    <div className='flex list-none ml-auto gap-10 font-semibold text-[18px]'>
                        {

                            link.map((link, index) => {
                                return (

                                    < li key={index} className='flex items-center gap-4 hover:text-orange-500 cursor-pointer'> {link.icon}

                                        <div className='text-[20px] font-semibold'> {link.name}
                                            <sup>  {link.sup}</sup>

                                        </div>


                                    </li>

                                )
                            })

                        }
                    </div>
                </div>

            </div >
        </>
    )
}

export default Heder
