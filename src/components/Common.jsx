
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Category } from "../Data/Category"


export const Common = () => {

    let [slide, setslide] = useState(0);
    const nextslide = () => {
        if (Category.length - 5 === slide) return false;

        setslide(slide + 3);
    }
    const previosslide = () => {
        if (Category === 0) return false;

        setslide(slide - 3);
    }
    return (
        <div className='max-w-[1200px] mx-auto z-0 '>
            <div className='flex flex-row justify-between mt-4'>
                <h1 className='text-[22px] font-bold tect-black'>
                    What's on your mind
                </h1>
                <div className='flex flex-row gap-4'>
                    <div className='w-[35px] h-[35px] rounded-full bg-slate-300 hover:opacity-65 flex justify-center items-center' onClick={previosslide}>
                        <FaArrowLeft />
                    </div>
                    <div className='flex items-center justify-center w-[35px] h-[35px] bg-slate-300 hover:opacity-65 rounded-full' onClick={nextslide}>
                        <FaArrowRight />
                    </div>
                </div>
            </div>
            <div className='mt-4 flex flex-row overflow-hidden' >


                {Category.map((img, index) => (
                    <div key={index} className='mb-4 shrink-0 duration-200' style={{
                        transform: `translateX(-${slide * 100}%)`
                    }}>
                        <img src={img.image} className=' w-[15dvw] h-[35dvh]' />
                        {img.name}
                    </div>
                ))}
            </div>
            <div className='border-b-1 border'></div>
        </div >
    );
}; 