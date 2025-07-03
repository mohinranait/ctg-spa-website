"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Users,
  CheckCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

const galleryImages = [
  {
    id: 1,
    title: "BLISS SPA",
    subtitle: "Premium Spa Experience",
    image: "luxury spa treatment massage therapy",
    size: "large",
    category: "Spa Treatment",
  },
  {
    id: 2,
    title: "Spa & Massage",
    subtitle: "Relaxation Therapy",
    image: "spa massage relaxation wellness",
    size: "medium",
    category: "Massage",
  },
  {
    id: 3,
    title: "Spa and Massage",
    subtitle: "Ultimate Wellness",
    image: "spa wellness massage aromatherapy",
    size: "medium",
    category: "Wellness",
  },
  {
    id: 4,
    title: "Welcome To The best Spa in Dhaka City",
    subtitle: "Premium Services",
    image: "best spa dhaka city premium",
    size: "large",
    category: "Welcome",
    featured: true,
  },
  {
    id: 5,
    title: "BEAUTY & SPA",
    subtitle: "Facial Treatment",
    image: "beauty spa facial treatment skincare",
    size: "medium",
    category: "Beauty",
  },
  {
    id: 6,
    title: "Spa & massage",
    subtitle: "Body Treatment",
    image: "spa massage body treatment therapy",
    size: "medium",
    category: "Body Care",
  },
  {
    id: 7,
    title: "Massage Treatment",
    subtitle: "Therapeutic Massage",
    image: "massage treatment therapeutic wellness",
    size: "small",
    category: "Massage",
  },
  {
    id: 8,
    title: "Body Massage",
    subtitle: "Relaxing Experience",
    image: "body massage relaxation therapy",
    size: "small",
    category: "Body Massage",
  },
  {
    id: 9,
    title: "Massage Therapy",
    subtitle: "Professional Service",
    image: "massage therapy professional spa",
    size: "small",
    category: "Therapy",
  },
  {
    id: 10,
    title: "BEAUTY & SPA",
    subtitle: "Complete Wellness",
    image: "beauty spa complete wellness treatment",
    size: "small",
    category: "Beauty",
  },
];

export default function GalleryPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Responsive Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold text-amber-800 dark:text-amber-400 transition-colors"
            >
              BLISS SPA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                About Us
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border dark:border-gray-700">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-amber-400"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-amber-400"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-amber-400"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-amber-400"
                    >
                      Aromatherapy
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/packages"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                Package
              </Link>
              <Link
                href="/gallery"
                className="text-red-500 font-semibold border-b-2 border-red-500 dark:text-red-400 dark:border-red-400"
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/book-now">
                <Button className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Now
                </Button>
              </Link>

              {/* Mobile Menu Button with Hamburger Animation */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors relative"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={
                      isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
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
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
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
              <Link
                href="/"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors py-2"
                >
                  <span>Services</span>
                  <motion.div
                    animate={isServicesOpen ? { rotate: 180 } : { rotate: 0 }}
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
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 hover:text-amber-800 dark:text-gray-400 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Aromatherapy
                    </a>
                  </div>
                </motion.div>
              </div>

              <Link
                href="/packages"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Package
              </Link>
              <Link
                href="/gallery"
                className="text-red-500 font-semibold px-4 py-2 dark:text-red-400"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Link href="/book-now">
                  <Button
                    className="bg-red-500 hover:bg-red-600 text-white w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent">
              Our Gallery
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Link
                href="/"
                className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <span>•</span>
              <span className="text-red-500 dark:text-red-400 font-semibold">
                Our Gallery
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our SPA Gallery Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our SPA Gallery
            </h2>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className={`
                  ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                  ${item.size === "medium" ? "md:row-span-1" : ""}
                  ${item.size === "small" ? "md:row-span-1" : ""}
                  ${item.featured ? "lg:col-span-2" : ""}
                `}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=${
                        item.size === "large"
                          ? "400"
                          : item.size === "medium"
                          ? "300"
                          : "250"
                      }&width=${item.size === "large" ? "600" : "400"}&query=${
                        item.image
                      }`}
                      alt={item.title}
                      width={item.size === "large" ? 600 : 400}
                      height={
                        item.size === "large"
                          ? 400
                          : item.size === "medium"
                          ? 300
                          : 250
                      }
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        item.size === "large" ? "h-80 md:h-96" : "h-64"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          item.featured ? "bg-purple-500" : "bg-red-500"
                        }/90 text-white`}
                      >
                        {item.category}
                      </Badge>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Stories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Our Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-2">
                  200
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Happy Client
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-2">
                  600
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Treatment Complete
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* New Spa Place Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                The New Spa Place we Built in Dhaka
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Opportunity refers to a favorable set of circumstances that
                allows for progress, advancement, or success in a particular
                endeavor. It can arise from various sources such as career,
                education, business, or personal development and requires a
                readiness to take action and make the most of the situation.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                Read More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="New Spa Place in Dhaka"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About Our Journey Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=400&width=400"
                      alt="Beauty Spa Special Offer"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-teal-600/80 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <h3 className="text-3xl font-bold mb-4">BEAUTY SPA</h3>
                        <p className="text-xl mb-4">Special Offer</p>
                        <div className="text-sm opacity-90">
                          Premium Treatment Experience
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                      About Our Journey From 2015 Until Now
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      Bliss Spa Dhaka offers a wide range of luxurious services,
                      from rejuvenating facials to holistic massages, designed
                      to help you unwind and restore your inner balance. Our
                      skilled therapists are dedicated to providing personalized
                      treatments that cater to your unique needs.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                      Let their expert therapists take care of you and provide
                      an unforgettable spa experience.
                    </p>
                    <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                      Read More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-2xl font-bold text-amber-400">
                  BLISS SPA
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you want a soothing and relaxing time of your life, book us
                now!!
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <Linkedin className="h-5 w-5" />
                </div>
              </div>
              <Link href="/book-now">
                <Button className="bg-red-500 hover:bg-red-600 text-white mt-6 w-full">
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Contact</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p>Address: Road 11,Rabindra Near</p>
                    <p>Dhaka Bank</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <p>01738001055</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-500" />
                  <p>blissspabd@gmail.com</p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-amber-400">
                  Opening Hours
                </h5>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>Saturday - Friday 10:00 - 22:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">
                Quick Link
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-amber-400 transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Package
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Best Services */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">
                Best Service
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Eye & Shadow
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Swedish Massage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Facial Therapy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Facial & Therapy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-400 transition-colors"
                  >
                    Lifting Facial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">Copyright blissspabd.com 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
