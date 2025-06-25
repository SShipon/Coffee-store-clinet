// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";


const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet /> {/* 👉 এই জায়গায় page content আসবে */}
      </main>
      <Footer />
    </div>  
  );
};

export default MainLayout;
