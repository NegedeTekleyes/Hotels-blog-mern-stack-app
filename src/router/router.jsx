import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import About from "../pages/miniPage/About";
import PrivacyPolicy from "../pages/miniPage/privacyPolicy";
import ContactUs from "../pages/miniPage/contactUs";
import SingleBlog from "../pages/blogs/singleBlog/singleBlog";
import Login from "../pages/user/Login";
import Register from "../pages/user/Register";
import AdminLayout from "../pages/admin/AdminLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AddPost from "../pages/admin/post/AddPost";
import ManagePosts from "../pages/admin/post/ManagePosts";
import ManageUser from "../pages/admin/user/ManageUser";
import PrivateRouter from "./PrivateRouter";
import Blogs from "../pages/blogs/Blogs";
import UpdatePost from "../pages/admin/post/UpdatePost";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
            {
                path: "/About-us",
                element: <About/>
            },
            {
                path: "/Privacy-policy",
                element: <PrivacyPolicy/>
            },
           { path: "/Contact-us",
               element: <ContactUs/>
            },
            {
                path: "blogs/:id",
                element: <SingleBlog/>
            },

             // login & registration
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            },
            {
                path: "/dashboard",
                element:  <PrivateRouter><AdminLayout/></PrivateRouter>, // it will be protected by the admin. use private Routes
                children: [
                // Define admin router her
                    {
                        path: "",
                        element:  <Dashboard/>
                    },
                    {
                        path: "add-new-post",
                        element: <AddPost/>
                    },
                    {
                        path: "manage-items",
                        element: <ManagePosts/>
                    },
                    {
                        path: "users",
                        element: <ManageUser/>
                    },
                    {
                        path: "update-items/:id",
                        element:  <UpdatePost/>  
                    }
           ],
           
           
            },
        ],
    },
]);

export default router;
