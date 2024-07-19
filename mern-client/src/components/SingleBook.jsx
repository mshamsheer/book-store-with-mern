import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
  const {_id,bookTittle,imageURL}=useLoaderData();

  return (
    <div>
    <h2>bookTittle</h2>
    </div>
  )
}

export default SingleBook