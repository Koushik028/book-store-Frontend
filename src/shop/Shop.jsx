import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

function Shop() {
  const [books,setBooks ]= useState([]);

  useEffect( () => {
    fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data));

  }, [])
  
 
  return (
 
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'> All Books</h2>

      <div className='grid gap-8 my-12 text-center lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
  {books.map(book => (
    <Card key={book.id}> 
      <div className="flex justify-center"> 
        <img src={book.imageUrl} alt={book.bookTitle} className='h-90 w-40' />
      </div>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {book.bookTitle}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{book.category}</p>
      <div className="mt-auto"> 
      <Link to={`/book/${book._id}`}><button className='bg-blue-600 font-semibold text-white py-1 px-12 rounded'>Read More</button></Link>
        </div>
    </Card>
  ))}
</div>
    </div>






     


  )
}

export default Shop