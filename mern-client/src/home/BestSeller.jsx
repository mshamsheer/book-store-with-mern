import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

const BestSeller = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8081/all-books").then(res=>res.json()).then(data=>setBook(data.slice(0,6)))
        
    },[])
  return (
    <div>
    <BookCard book={book} headline="Best Seller Book" />
    </div>
  )
}

export default BestSeller