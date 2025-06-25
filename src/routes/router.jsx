// src/router.js
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import SignIn from "../pages/auth/ SignIn";
import SignUp from "../pages/auth/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // ✅ Layout with Header/Footer
    children: [
    { index: true, element: <Home /> },
    { path: "about", element: <About /> },
    { path: "contact", element: <Contact /> },
    { path: "coffee", element: <AddCoffee /> },
     { path: "coffee", element: <UpdateCoffee /> },
    { path: "login", element: <SignIn /> },     // ✅ login route
    { path: "register", element: <SignUp /> },
    ],
  },
]);

export default router;
