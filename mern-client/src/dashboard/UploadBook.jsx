import React, { useState } from "react";
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
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
  const handleBookSubmit=(event)=>{
    event.preventDefault();
    const form=event.target;
    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription=form.bookDescription.value;
    const bookPDFURL=form.bookPDFURL.value;

    const bookObj={
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }

    console.log(bookObj)

    fetch("http://localhost:8081/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      alert("Book uploaded successfully");
      form.reset();
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    

  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>
      <form onSubmit={handleBookSubmit} className="flex lg:w-[1100px] flex-col flex-row gap-4">
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
            />
          </div>
          {/* author name*/}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              name="authorName"
              required
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
            required rows={6} />

        </div>
        {/* book pdn link*/}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required />
      </div>
      <Button className="bg-blue-700" type="submit">Upload Book</Button>

      </form>
    </div>
  );
};

export default UploadBook;
