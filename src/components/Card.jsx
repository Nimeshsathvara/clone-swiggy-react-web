import React from 'react'
import { Res } from "../Data/Restorant"
import { FaStar } from 'react-icons/fa'
import { BsAsterisk } from 'react-icons/bs'

const Card = () => {
    return (
        <div className='max-w-[1200px] mx-auto '>
            <div>

                <h1 className='text-[22px] font-bold'>Restaurants with online food delivery in Ahmedabad
                </h1>
            </div>
            <div className='grid grid-cols-4 gap-6 my-8'>
                {Res.map((img1, index) => (

                    <div key={index} className='mb-4 shrink-0 flex flex-col gap-1 duration-200'
                    >
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

export default Card
