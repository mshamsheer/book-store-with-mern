import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import 'flowbite/dist/flowbite.css';
import { Link } from 'react-router-dom';


const ManageBook = () => {
  const [allBook,setAllBook]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8081/all-books").then(res=>res.json()).then(data=>setAllBook (data))
        
    },[])

    // delte book
    const handleDeleteBook=(id)=>{
      console.log(id)
      fetch(`http://localhost:8081/book/${id}`,{
        method:"DELETE",
      }).then(res=>res.json()).then(data=>{alert("Book Deleted")
        // setAllBook(data)
      })
    }
        
  return (
   
    <div className='px-4 my-12'>
    <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>
    <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>


          <Table.HeadCell>
            <span >Edit or manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBook.map((book,index)=><Table.Body className="divide-y" key={book._id}>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$10</Table.Cell>
            <Table.Cell>
              <Link
               to={`/admin/dashboard/edit-book/${book._id}`}
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' onClick={()=>handleDeleteBook(book._id)}>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        


       
      </Table>
    </div>
  )
}

export default ManageBook;
