import React from 'react'

const About = () => {
  return (
    <div className='my-32 w-full'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>
                    Trusted by developers across the world
                </h1>
                <p className='py-6 text-3xl text-gray-500'>Lorem ipsum dolor sit amet consectetor Adipiscing elit.Cumque asperiores earum placeat veritates dignissimos itaque</p>
            </div>
            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                
            <div  className='border rounded-xl shodow-xl'>
                <h1 className='text-6xl font-bold text-indigo-600'>
                    100%
                </h1>
                <p className='text-gray-400 mt-2'>completion</p>
            </div>
            <div className='border rounded-xl shodow-xl'>
                <h1 className='text-6xl font-bold text-indigo-600'>
                    24/7
                </h1>
                <p className='text-gray-400 mt-2'>Delivery</p>
            </div>
            <div className='border rounded-xl shodow-xl'>
                <h1 className='text-6xl font-bold text-indigo-600'>
                    100k
                </h1>
                <p className='text-gray-400 mt-2'>Transaction</p>
            </div>
            </div>
        
        </div>
      
    </div>
  )
}

export default About
