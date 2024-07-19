import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";


const EditBook = () => {
  const {id}=useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData()
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Childeren books",
    "Travel",
    "Religion",
    "Art and Desing",
  ];
  const [selectBookCategories, setSelectBookCategories] = useState(
    bookCategories[0]
  );
  const handleChangeSelectionValue = (event) => {
    setSelectBookCategories(event.target.value);
  };
  // handle book submission
  const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const updateBookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    // console.log(bookObj)
    fetch(`http://localhost:8081/book/${id}`,{

      method:"PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateBookObj),
    }).then(res =>res.json())
    .then(data => {
      alert("Book uploaded successfully");
     
    })

   
    

  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1100px] flex-col flex-row gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              name="bookTitle"
              required
              defaultValue={bookTitle}
            />
          </div>
          {/* author name*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" 
              
              />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              name="authorName"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* 2nd row*/}
        {/* image url*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              placeholder="Book image url"
              name="imageURL"
              required
              defaultValue={imageURL}
            />
          </div>

          {/*category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectBookCategories}
              onChange={handleChangeSelectionValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* bookDescroption */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription"
          name='bookDescription'
          className="w-full"
           placeholder="Write your book description."
            required rows={6} 
            defaultValue={bookDescription}
            />

        </div>
        {/* book pdn link*/}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required
        defaultValue={bookPDFURL}
         />
      </div>
      <Button className="bg-blue-700" type="submit">Update Book</Button>

      </form>
    </div>
  );
  
}

export default EditBook