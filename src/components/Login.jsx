import React, { useContext, useState } from 'react';
import { Link, useNavigate , useLocation} from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';
import  googleLogo from "../assets/Banner-books/google.jpg"

const Login = () => {

    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState ("");

    const location = useLocation();
    const navigate = useNavigate(); 

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Logged in successfully!!")
            navigate(from, {replace: true})
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
            // ..
          });

        // Check if password meets minimum length requirement
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

   
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
                            <h1 className="text-2xl font-semibold">Login</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Email address" />
                                </div>
                             
                   
                                <div className="relative">

                         
                                    <input id="password" name="password" type="password" minLength="6" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none" placeholder="Password" />
                                    {error ? <p className='mt-3 text-red-600 text-base'>Email or Password is Incorrect</p> : ""}
                                    <p className='mt-3'>If you haven't an account, Please <Link to="/sign-up" className=" text-blue-600 underline">Sign up </Link> Here</p>
                                  
                                    <button type="submit" className="bg-blue-600 text-white rounded-md px-4 py-2 mt-5 hover:bg-black">Login</button>
                                </div>
                            </form>
                        </div>

                        <hr />
                        <div className='flex w-full items-center flex-col mt-5 gap-3'>
                            <button onClick={handleLogin} className='block'><img src={googleLogo} alt='' className='w-12 h-12 inline-block'></img>Login with Google</button>
                        </div>
                     

                       
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login