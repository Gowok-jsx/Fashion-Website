import React from 'react'
import {PhoneIcon,ArrowSmRightIcon,  } from '@heroicons/react/outline'
import { ChipIcon,SupportIcon } from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[750px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay ' src={supportImg} alt="/" />
      </div>
      <div className='max-w-[1240opx] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-slate-300 uppercase text-center text-3xl'>Support</h2>
          <h3 className='font-bold text-center text-5xl py-6'>Finding the right team</h3>
          <p className='py-4 text-3xl text-slate-300'>Lorem ipsum dolbjor sit amet consectetor Adipiscing elit.Cumque asperiores earum placeat veritates dignissimos itaque</p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
            <PhoneIcon className='w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]'/>
            <h3 className='font-bold my-6 text-2xl'>Sales</h3>
            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetor Adipiscing elit.Cumque asperiores earum placeat veritates dignissimos itaque</p>
            </div>
          <div className='bg-slate-200 pl-8 py-4'>
            <p className='text-xl flex items-center text-blue-600' >Contact us <ArrowSmRightIcon className='w-5 ml-2'/></p>
          </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
            <SupportIcon className='w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]'/>
            <h3 className='font-bold my-6 text-2xl'>Technical Support</h3>
            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetor Adipiscing elit.Cumque asperiores earum placeat veritates dignissimos itaque</p>
            </div>
          <div className='bg-slate-200 pl-8 py-4'>
            <p className='text-xl flex items-center text-blue-600' >Contact us <ArrowSmRightIcon className='w-5 ml-2'/></p>
          </div>
          </div>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
            <ChipIcon className='w-16 bg-indigo-600 p-4 rounded-lg text-white mt-[-4rem]'/>
            <h3 className='font-bold my-6 text-2xl'>Media Inquries</h3>
            <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetor Adipiscing elit.Cumque asperiores earum placeat veritates dignissimos itaque</p>
            </div>
          <div className='bg-slate-200 pl-8 py-4'>
            <p className='text-xl flex items-center text-blue-600' >Contact us <ArrowSmRightIcon className='w-5 ml-2'/></p>
          </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Support
