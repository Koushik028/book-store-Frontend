import React from 'react'
import Banner from '../components/Banner'
import MyBooks from './MyBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import GenreBooks from './GenreBooks'

function Layout() {
  return (
  <div>
    <Banner/>
    <MyBooks/>
    <FavBook/>
    <PromoBanner/>
    <GenreBooks/>
  </div>

    
  )
}

export default Layout