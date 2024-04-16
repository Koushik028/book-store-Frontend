import React from 'react'
import { useState, useEffect } from 'react'
import GenreBookCard from '../components/GenreBookCard'



const GenreBooks = () => {
    const [books,setBooks] = useState([])

    useEffect (() => {
        fetch ("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(5,10)))

    }, [])

  return (
    <div>
        <GenreBookCard  books={books} headline = "Genres"/>
    </div>
  )
}

export default GenreBooks