// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// const SingleBook = () => {
//     const {_id, bookTitle , imageUrl, category , authorName, bookDescription} = useLoaderData();
//   return (
//     <div className='mt-28 px-4 lg:px-24'>
//         <img src={imageUrl} alt='' className='h-96'/>

//         <h2 className='text-3xl' font-bold>{bookTitle}</h2>
//         <h3 className='text-2xl'>{authorName}</h3>
//         <h3 >{category}</h3>
//         <h3 >price : 10.00$</h3>
//         <p className='font-bold'>{bookDescription}</p>

       
       
      
   

//     </div>
//   )
// }

// export default SingleBook

import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, bookTitle , imageUrl, category , authorName, bookDescription} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 flex'>
        <img src={imageUrl} alt='' className='h-96 flex-shrink-0'/>

        <div className="ml-4 flex-grow">
            <h2 className='text-3xl font-bold'>{bookTitle}</h2>
            <h3 className='text-2xl'>{authorName}</h3>
            <h3>{category}</h3>
            <h3>price : $10.00</h3>
            <p className='font-bold'>{bookDescription}</p>
        </div>
    </div>
  )
}

export default SingleBook;
