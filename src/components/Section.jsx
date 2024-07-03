import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Res } from "../Data/Restorant";
import { FaStar } from "react-icons/fa";
import { BsAsterisk } from "react-icons/bs";


const Section = () => {
    let [slide, setslide] = useState(0);
    const nextslide = () => {
        if (Res.length - 4 === slide) return false;

        setslide(slide + 1);
    }
    const previosslide = () => {
        if (Res === 0) return false;
        setslide(slide - 1);
    }
    return (

        <div className='max-w-[1200px] mx-auto z-0'>
            <div className='flex flex-row justify-between mt-4'>
                <h1 className='text-[22px] font-bold text-black'>
                    Top restaurant chains in Ahmedabad
                </h1>
                <div className='flex flex-row gap-4'>
                    <div className='w-[35px] h-[35px] rounded-full bg-slate-300 hover:opacity-65 flex justify-center items-center'>
                        <FaArrowLeft onClick={previosslide} />
                    </div>
                    <div className='flex items-center justify-center w-[35px] h-[35px] bg-slate-300 hover:opacity-65 rounded-full' onClick={nextslide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='flex flex-row overflow-hidden my-9 gap-3  '>
                {Res.map((img1, index) => (

                    <div key={index} className='mb-4 shrink-0 flex flex-col gap-1 duration-200' style={{
                        transform: `translateX(-${slide * 100}%)`
                    }}>
                        <div className='hover:scale-95 duration-300 cursor-pointer'>
                            <div>
                                <img src={img1.image} className=' w-[19dvw] h-[25dvh] rounded-lg' />

                                <div className='font-semibold text-[25px] text-gray-700' > {img1.title}</div>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <div> <FaStar className='inline text-green-700 mb-1' fontSize={20} /></div>
                                <div className='flex flex-row gap-1 items-center'>
                                    <div className='inline  text-gray-700 text-[18px]'> {img1.rating}</div>
                                    <div >    <BsAsterisk fontSize={6} className=' inline' /></div>

                                    <div className='inline  text-gray-700 text-[18px]'> {img1.minTime} - {img1.maxTime} mins</div>
                                </div>
                            </div>
                            <div className=' text-gray-700 text-[18px]'>
                                {img1.place}
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Section
