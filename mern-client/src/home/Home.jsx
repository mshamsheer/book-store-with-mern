import React from 'react'
import Banner from '../components/Banner'
import BestSeller from './BestSeller'
import { FavBook } from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Reviews from './Reviews'

const Home = () => {
  return (
    <div>
    <Banner/>
    <BestSeller/>
    <FavBook/>
    <PromoBanner/>
    <OtherBooks/>
    <Reviews/>
    </div>
    
  )
}

export default Home
