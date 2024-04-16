
// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom'



// const ManageBook = () => {
//   const [allBooks,setAllBooks] = useState([]);
//   useEffect( () => {
//     fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));

//   }, [])
//   return (
//     <div className='px-4 my-12'>
//        <h2 className="mb-8 text-3xl font-bold">Manage Your books</h2>


//        {/* table */}

//        <table class=" lg:w-[1180px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     No.of Books
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                    Book Name
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                   Author Name 
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Category
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     Price
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                    Manage
//                 </th>
//             </tr>
//         </thead>

//         {
//           allBooks.map((book, index) => <tbody className="divide-y" key={book._id}>
//               <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   {index + 1}
//                 </th>
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     {book.bookTitle}
//                 </th>
//                 <td class="px-6 py-4">
//                    {book.authorName}
//                 </td>
//                 <td class="px-6 py-4">
//                    {book.category}
//                 </td>
//                 <td class="px-6 py-4">
//                     $10.00
//                 </td>
               
                
//                     {/* <Link to={}class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit     <Link/> */}

//                     <Link to={`/admin/dashboard/edit-books/${book._id}`} class="px-6 py-4 font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit

//                     </Link>
              
           
//             </tr>
         
                       

//           </tbody>)



//         }


      
//     </table>


//     </div>
//   )
// }

// export default ManageBook


// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';

// const ManageBook = () => {
//   const [allBooks, setAllBooks] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/all-books")
//       .then(res => res.json())
//       .then(data => setAllBooks(data));
//   }, []);

//   const handleDelete = (id) => {
 
//     fetch(`http://localhost:5000/book/${id}` , {
//       method: "DELETE",
//     }).then(res => res.json()).then(data => {
//       alert("Book is deleted successfully !!")
     
    
//     })
//   }

//   return (
//     <div className='px-4 my-12'>
//       <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

//       <table className="lg:w-[1180px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="px-6 py-3">No. of Books</th>
//             <th scope="col" className="px-6 py-3">Book Name</th>
//             <th scope="col" className="px-6 py-3">Author Name</th>
//             <th scope="col" className="px-6 py-3">Category</th>
//             <th scope="col" className="px-6 py-3">Price</th>
//             <th scope="col" className="px-6 py-3">Manage</th>
//           </tr>
//         </thead>

//         <tbody className="divide-y">
//           {allBooks.map((book, index) => (
//             <tr key={book._id} className={index % 2 === 0 ? "even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" : "odd:bg-white odd:dark:bg-gray-900 border-b dark:border-gray-700"}>
//               <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
//               <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{book.bookTitle}</td>
//               <td className="px-6 py-4">{book.authorName}</td>
//               <td className="px-6 py-4">{book.category}</td>
//               <td className="px-6 py-4">$10.00</td>
//               <td className="px-6 py-4">
//                 <Link to={`/admin/dashboard/edit-books/${book._id}`} className="mr-5 bg-sky-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-800">Edit</Link>
//                 <button onClick={() => handleDelete (book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-800">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ManageBook;

import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-backend-kwf7.onrender.com/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`https://book-store-backend-kwf7.onrender.com/book/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is deleted successfully !!");
      // Update the state after successful deletion
      setAllBooks(prevBooks => prevBooks.filter(book => book._id !== id));
    })
    .catch(error => console.error("Error deleting book:", error));
  }

  return (
    <div className='px-4 my-12'>
      <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>

      <table className="lg:w-[1180px] w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">No. of Books</th>
            <th scope="col" className="px-6 py-3">Book Name</th>
            <th scope="col" className="px-6 py-3">Author Name</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Price</th>
            <th scope="col" className="px-6 py-3">Manage</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {allBooks.map((book, index) => (
            <tr key={book._id} className={index % 2 === 0 ? "even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" : "odd:bg-white odd:dark:bg-gray-900 border-b dark:border-gray-700"}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index + 1}</td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{book.bookTitle}</td>
              <td className="px-6 py-4">{book.authorName}</td>
              <td className="px-6 py-4">{book.category}</td>
              <td className="px-6 py-4">$10.00</td>
              <td className="px-6 py-4">
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="mr-5 bg-sky-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-800">Edit</Link>
                <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-red-800">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBook;


