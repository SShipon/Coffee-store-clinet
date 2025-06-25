// src/router.js
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // ✅ Layout with Header/Footer
    children: [
      {
        index: true, // default route
        element: <App />,
      },
      {
        path: "addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
