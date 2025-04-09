import React from 'react'
import { Button } from './ui/button'
import hero7 from "../assets/hero7.jpeg";

const Content = () => {
  return (
    <div className='bg-[rgb(226,232,240)] py-10 px-4'>
      <div className='flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-10'>
        
        {/* Text Section */}
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold'>
            Free Apprenticeship <br /> with Scholarship
          </h1>
          <p className='mt-4'>
            Specially designed for students who are looking to <br className='hidden md:block' />
            upgrade their skills.
          </p>
          <h5 className='text-xl font-medium mt-4'>Limited Seats Available – Act Now!</h5>
          <p className='mt-4'>
            Join our exclusive training program and gain hands-on <br className='hidden md:block' />
            experience with industry-leading tools and techniques.
          </p>
          <Button className="mt-6 px-6 py-4 text-sm bg-amber-500 hover:bg-amber-600">
            Register Now - Limited Seats!
          </Button>
        </div>

        {/* Image Section */}
        <div className='w-full md:w-1/2 flex justify-center'>
          <img src={hero7} alt='training' className='w-full max-w-md rounded-2xl' />
        </div>

      </div>
    </div>
  );
};

export default Content;
