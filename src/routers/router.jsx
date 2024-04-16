import App from "../App.jsx";
import Layout from "../home/Layout.jsx";
import Shop from "../shop/Shop.jsx";
import About from "../components/About.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SingleBook from "../shop/SingleBook.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBook from "../dashboard/ManageBook.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import Login from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Logout from "../components/Logout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
     
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element:<DashboardLayout/>,
    children: [
        {
            path:"/admin/dashboard",
            element:<PrivateRoute><Dashboard/></PrivateRoute>
        },
        {
            path:"/admin/dashboard/upload",
            element:<UploadBook/>
        },
        {
            path:"/admin/dashboard/manage",
            element:<ManageBook/>
        },
        {
            path:"/admin/dashboard/edit-books/:id",
            element:<EditBooks/>,
            loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
        }
    ]
  },{
    path:"sign-up",
    element:<Signup/>
  },

  {
    path: "login",
    element:<Login/>
  },

  {
    path:"logout",
    element:<Logout/>
  }
]);

export default router;
