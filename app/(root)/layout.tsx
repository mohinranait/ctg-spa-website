import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

type PropType = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: PropType) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
