"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { navMenus } from "@/consts/data";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50 dark:bg-gray-900/95 dark:border-gray-800"
    >
      <div className="lg:hidden bg-[#ef4444] text-white py-2 ">
        <p className="flex justify-center text-sm ">
          <a href="tel:01788453585" className="flex items-center gap-2  ">
            <Phone size={14} /> 01788453585{" "}
          </a>
        </p>
        <p className="flex justify-center ">
          <a
            href="mailto:info@ctgspa.com"
            className="flex items-center text-sm gap-2  "
          >
            <Mail size={14} /> info@ctgspa.com{" "}
          </a>
        </p>
      </div>
      <div className="container max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navMenus?.map((menu) => {
              return (
                <React.Fragment key={menu.label}>
                  {menu.items && menu.items?.length > 0 ? (
                    <>
                      <div className="relative group">
                        <Link
                          href={`${menu.url}`}
                          className="flex items-center text-gray-700 hover:text-amber-800 transition-colors dark:text-gray-300 dark:hover:text-amber-500"
                        >
                          {menu?.label} <ChevronDown className="ml-1 h-4 w-4" />
                        </Link>
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 dark:bg-gray-800 dark:shadow-none dark:border dark:border-gray-700">
                          <div className="py-2">
                            {menu.items?.map((subMenu) => (
                              <Link
                                href={`${subMenu?.url}`}
                                className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-amber-500/10 dark:hover:text-amber-500"
                              >
                                {subMenu?.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`${menu?.url}`}
                        className={cn(
                          "text-gray-700 hover:text-amber-800 transition-colors dark:text-gray-300 dark:hover:text-amber-500",
                          pathName === menu?.url &&
                            "text-red-500 font-semibold border-b-2 border-red-500 dark:text-red-400 dark:border-red-400"
                        )}
                      >
                        {menu?.label}
                      </Link>
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="tel:01788453585">
              <Button className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Call now
              </Button>
            </Link>

            <ThemeToggle />

            {/* Mobile Menu Button with Hamburger Animation */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className="lg:hidden p-2 text-gray-700 hover:text-amber-800 transition-colors relative dark:text-gray-300 dark:hover:text-amber-500"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 8 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -0 } : { rotate: 0, y: -8 }
                  }
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current block absolute"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <motion.nav
            initial={false}
            animate={isMenuOpen ? { y: 0 } : { y: -20 }}
            transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 : 0 }}
            className="flex flex-col space-y-4 pt-4 pb-4 border-t border-gray-200 dark:border-gray-700"
          >
            {navMenus?.map((menu) => {
              return (
                <>
                  {menu.items && menu?.items?.length > 0 ? (
                    <div className="px-4">
                      <button
                        onClick={() => {
                          setIsServicesOpen(!isServicesOpen);
                          router.push(`${menu.url}`);
                        }}
                        className="flex items-center justify-between w-full text-gray-700 hover:text-amber-800 transition-colors py-2 dark:text-gray-300 dark:hover:text-amber-500"
                      >
                        <span>{menu?.label}</span>
                        <motion.div
                          animate={
                            isServicesOpen ? { rotate: 180 } : { rotate: 0 }
                          }
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={
                          isServicesOpen
                            ? { height: "auto", opacity: 1 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-2 pt-2">
                          {menu?.items?.map((subMenu) => (
                            <Link
                              key={subMenu?.label}
                              onClick={() => setIsMenuOpen(false)}
                              href={`${subMenu?.url}`}
                              className="block text-gray-600 hover:text-amber-800 transition-colors py-1 dark:text-gray-400 dark:hover:text-amber-500"
                            >
                              {subMenu?.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  ) : (
                    <Link
                      key={menu?.label}
                      href={`${menu?.url}`}
                      className={cn(
                        "text-gray-700 hover:text-amber-800 transition-colors px-4 py-2 dark:text-gray-300 dark:hover:text-amber-500",
                        pathName === menu?.url &&
                          "text-red-500 font-semibold px-4 py-2 dark:text-red-400"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {menu?.label}
                    </Link>
                  )}
                </>
              );
            })}

            <div className="px-4 pt-2">
              <Link href="tel:01788453585">
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call now
                </Button>
              </Link>
            </div>
          </motion.nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;
