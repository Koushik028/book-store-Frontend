import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";

const UploadBook = () => {
  const bookCategories = [

    "Fiction",
    "History",
    "science-Fiction",
    "Fantasy",
    "Romance",
    "Horror",
    "Mystery",
    "Biography",
    "Art",
    "Graphic Novels",
    "Ebooks",
    "Sports",
    "Poetry",
    "Psychology",

  ]

  const [selectedBookCategory,setSelectedBookCategory]= useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value)
    setSelectedBookCategory(event.target.value);
  }

  //handle submit
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl
    }

    console.log(bookObj);

    //send data to db
    
    fetch("https://book-store-backend-kwf7.onrender.com/admin/dashboard/upload-book", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },

      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book Uploaded Successfully!!!");
      form.reset();
  
    })



  }
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>

      <form  onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-warp gap-4">

        {/*1st row */}
<div className="flex gap-8"> 
<div className="lg:w-1/2">
  {/* book title */}
        <div className="mb-2 block">
          <Label htmlFor="bookTitle"
           value="Book Title" />
        </div>
        <TextInput 
        id="bookTitle" 
        name="bookTitle"
        type="text" 
        placeholder="Book name" required />
      </div>

      {/* author  name */}

      <div className="lg:w-1/2">
        <div className="mb-2 block">
          <Label htmlFor="authorName"
           value="Author Name" />
        </div>
        <TextInput 
        id="authorName" 
        name="authorName"
        type="text" 
        placeholder="Author name" required />
      </div>

</div>


        {/*2nd row */}
        <div className="flex gap-8"> 
<div className="lg:w-1/2">
  
  {/* book title */}
        <div className="mb-2 block">
          <Label htmlFor="imageUrl"
           value="Book Image URL" />
        </div>
        <TextInput 
        id="imageUrl" 
        name="imageUrl"
        type="text" 
        placeholder="Book image URL" required />
      </div>

      {/* category */}

      <div className="lg:w-1/2">
      <div className="mb-2 block">
          <Label htmlFor="inputState"
           value="Book Category" />
        </div>

        <select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }

        </select>
      
      </div>

</div>

{/* book description */}

<div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" 
          name="bookDescription"
        className="w-full"
        placeholder="Write your book description..." required rows={6} />
       
      
      </div>

      {/*book pdf link */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
        </div>
        <TextInput id="bookPdfUrl" 
        name="bookPdfUrl"
        
        type="text" placeholder="Book pdf url" required />
      </div>
     
      <Button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-black"
        >
          Submit
          </Button>



     
    </form>
    </div>
  );
};

export default UploadBook;
