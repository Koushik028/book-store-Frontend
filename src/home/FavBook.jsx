import React from 'react'
import FavBookImg from "../assets/Banner-books/Books.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt='' className='rounded md:w-10/12'/>

        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourite <span className='text-blue-700'>Books Here !!!</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>At our library, we believe in the transformative power of books. Whether you're diving into a gripping novel, researching a new topic, or simply seeking a quiet place to study, we're here to support your journey."

Our library is more than just a collection of books—it's a community hub where ideas flourish and imaginations soar. From children's storytime sessions to adult book clubs, there's something for everyone to enjoy.</p>

            
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>

                    <h3 className='text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listings</p>
                </div> 
                <div>
                    <h3 className='text-3xl font-bold'>500+</h3>
                    <p className='text-base'>Registered Users</p>
                </div> 

                <div>
                    <h3 className='text-3xl font-bold'>200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div> 
            

            </div>

            <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black 
            transition-all duration-300'>Explore More</button></Link>
        </div>

    </div>
  )
}

export default FavBook