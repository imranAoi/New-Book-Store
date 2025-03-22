import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import SingleBook from "../pages/SingleBook";
import PrivateRoute from "./PrivateRoute";
import OrderPage from "../pages/CheckOut";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/DashboardLayout";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/orders",
            element: <PrivateRoute><OrderPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <div>About</div>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: "/cart",
          element: <Cart/>
        },
        {
          path: "/checkout",
          element: <PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
          path: "/books/:id",
          element: <SingleBook/>
        },
       
        
      ]
    },
    {
      path: "/admin",
      element: <AdminLogin/>
    },
    {
      path: "/dashboard",
      element: <AdminRoute>
        <DashboardLayout/>
      </AdminRoute>,
      children:[
        {
          path: "",
          element: <AdminRoute><Dashboard/></AdminRoute>
        },
      ]
    }
  ]);

  export default router;