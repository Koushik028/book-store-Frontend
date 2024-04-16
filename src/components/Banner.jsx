import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-blue-200 flex items-center'>
 
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>

            {/*left side*/} 
<div className=' md:w-1/2 space-y-7 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books <span>for the best price</span></h2>
            <h3 className='md:w-4/5 font-bold'> Browse all the collection of our best top seller books</h3>
                {/* <div>
                    <input type='search' name='search' id='search' placeholder='Search a book' className='py-2 px-2 rounded-s-sm'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div> */}
                </div>

            {/*Right  side */}

            <div>
                <BannerCard/>
            </div>


        </div>
    </div>
   
  )
}

export default Banner