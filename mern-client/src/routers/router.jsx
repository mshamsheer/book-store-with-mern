import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogOut from "../components/LogOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => fetch(`http://localhost:8081/book/${params.id}`)
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element:<PrivateRoute><Dashboard /></PrivateRoute> 
      },
      {
        path: "upload",
        element: <UploadBook />
      },
      {
        path: "manage",
        element: <ManageBook />
      },
      {
        path: "edit-book/:id",
        element: <EditBook />,
        loader: ({ params }) => fetch(`http://localhost:8081/book/${params.id}`)
      }
    ]
  },
  {
    path: "signup",
    element: <SignUp />
  },
  {
    path: "login",
    element: <LogIn />
  },
  {
    path: "logout",
    element: <LogOut />
  }

]);

export default router;
