import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropType = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: PropType) => {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
      <Link
        href={"tel:01788453585"}
        className="inline-flex sm:hidden bg-green-600 text-white items-center justify-center w-11 h-11 rounded-full fixed bottom-5 left-5"
      >
        <Phone size={18} />
      </Link>
      <Link
        href={"https://wa.me/+8801788453585"}
        className="inline-flex sm:hidden items-center justify-center w-12 h-12 rounded-full fixed bottom-5 right-5"
      >
        <Image
          src={"/whatsapp.png"}
          width={50}
          height={50}
          alt="whatsapp logo"
        />
      </Link>
    </div>
  );
};

export default MainLayout;
