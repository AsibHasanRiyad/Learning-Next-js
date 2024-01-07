import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" min-h-screen max-w-7xl flex justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default layout;
