import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards'

const MyBooks = () => {
    const [books,setBooks] = useState([])

    useEffect (() => {
        fetch ("https://book-store-backend-kwf7.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))

    }, [])

  return (
    <div>
        <BookCards books={books} headline = "Best seller books"/>
    </div>
  )
}

export default MyBooks
