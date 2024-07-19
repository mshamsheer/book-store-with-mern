import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'

const OtherBooks = () => {
    const [book,setBook]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8081/all-books").then(res=>res.json()).then(data=>setBook(data.slice(0,6)))
        
    },[])
  return (
    <div>
    <BookCard book={book} headline="Other Books" />
    </div>
  )
}

export default OtherBooks