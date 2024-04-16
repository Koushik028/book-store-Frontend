// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import { AuthContext } from '../contects/AuthProvider'

// const Signup = () => {
//     const {createUser} = useContext(AuthContext);
//     const [error, setError] = useState("error")


//     const handleSignUp = (event) => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password= form.password.value;

// createUser(email, password).then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     setError(errorMessage)
//     // ..
//   });


//     }

//   return (

//     <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//         <div class="relative py-3 sm:max-w-xl sm:mx-auto">
//             <div
//                 class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
//             </div>
//             <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//                 <div class="max-w-md mx-auto">
//                     <div>
//                         <h1 class="text-2xl font-semibold">Sign Up</h1>
//                     </div>
//                     <div class="divide-y divide-gray-200">
//                         <form  onSubmit={handleSignUp} class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                             <div class="relative">
//                                 <input  id="email" name="email" type="text" class="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                               
//                             </div>
//                             <p>If u have an account, Please <Link to="/login" className='text-blue-600 underline'>Login</Link> Here</p>
//                             <div class="relative">
//                                 <input id="password" name="password" type="password" class="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                              
//                                 <button class="bg-blue-600 text-white rounded-md px-4 py-2 mt-5 hover:bg-black">Sign Up</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Signup

import React, { useContext } from 'react';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import  googleLogo from "../assets/Banner-books/google.jpg"

const Signup = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate(); 

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Check if password meets minimum length requirement
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // Do something with the signed-up user
                alert ("signed in successfully")
                navigate(from, {replace: true})
            });
    };


    //signup using google account

    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert ("signed in successfully")
            navigate(from, {replace: true})
        })

    }

    return (
        <div className="bg-sky-200 min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Sign Up</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Email address" />
                                </div>
                               
                                <div className="relative">
                                    <input id="password" name="password" type="password" minLength="6" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Password" />

                                    <p className='mt-3'>If you have an account, Please <Link to="/login" className="text-blue-600 underline">Login</Link> Here</p>
                                    <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 mt-5 hover:bg-black">Sign Up</button>
                                </div>
                            </form>
                        </div>

                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleRegister} className='block'><img src={googleLogo} alt='' className='w-12 h-12 inline-block'></img>Login with Google</button>
                        </div>
                     

                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;

