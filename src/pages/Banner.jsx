import React from 'react'
import bannerImg from '../assets/banner.png'
 function Banner() {
  return (
    <>
    <div className='flex flex-col md:flex-row py-16 px-4 justify-between items-center gap-12'>
    <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={bannerImg}/>
        </div>
        <div className='md:w-1/2 w-full flex flex-col gap-4'>
         <h1 className='md:text-5xl text-2xl font-medium mb-7'>New Releases This Week </h1>
         <p>It's time to read somthing new and update your reading list with some of the latest and greatest
            releases in the literary wrold. From heart-pumping thrillers to captivating memories, this week's 
            new releases offer something for everyone.
         </p>
         <button className='bg-amber-400 rounded px-3 text-md py-1 w-1/2'> subscribe</button>
    </div>
    
    </div>
    </>
  )
}
export default Banner