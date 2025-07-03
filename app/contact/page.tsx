"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, ChevronDown, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      {/* Responsive Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-800 dark:text-amber-400 transition-colors">
              BLISS SPA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                About Us
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border dark:border-gray-700">
                  <div className="py-2">
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
                    >
                      Aromatherapy
                    </a>
                  </div>
                </div>
              </div>
              <Link
                href="/packages"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Package
              </Link>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Gallery
              </a>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-red-500 dark:text-red-400 font-semibold border-b-2 border-red-500 dark:border-red-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="hidden sm:block bg-red-500 hover:bg-red-600 text-white px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Book Now
              </Button>

              {/* Mobile Menu Button with Hamburger Animation */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors relative"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-current block absolute"
                  />
                  <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-0.5 bg-current block absolute"
                  />
                  <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
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
            animate={isMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
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
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="px-4">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors py-2"
                >
                  <span>Services</span>
                  <motion.div animate={isServicesOpen ? { rotate: 180 } : { rotate: 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={isServicesOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-2 pt-2">
                    <a
                      href="#"
                      className="block text-gray-600 dark:text-gray-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 dark:text-gray-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 dark:text-gray-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block text-gray-600 dark:text-gray-400 hover:text-amber-800 dark:hover:text-amber-400 transition-colors py-1"
                    >
                      Aromatherapy
                    </a>
                  </div>
                </motion.div>
              </div>

              <Link
                href="/packages"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Package
              </Link>
              <a
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <Link
                href="/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-red-500 dark:text-red-400 font-semibold px-4 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2">
                <Button className="bg-red-500 hover:bg-red-600 text-white w-full" onClick={() => setIsMenuOpen(false)}>
                  Book Now
                </Button>
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
        className="relative h-[300px] bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent transition-colors">
              Contact
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 transition-colors">
              <Link href="/" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
              <span>•</span>
              <span className="text-red-500 dark:text-red-400 font-semibold transition-colors">Contact</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Spa Relaxation"
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
                  <h3 className="text-4xl font-bold mb-4">Relax</h3>
                  <h3 className="text-4xl font-bold mb-4">Renew</h3>
                  <h3 className="text-4xl font-bold mb-8">Refresh</h3>
                  <div className="bg-white/90 text-gray-800 px-6 py-4 rounded-lg">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-red-500" />
                      <span className="font-semibold">Saturday - Friday</span>
                    </div>
                    <div className="text-lg font-bold">10:00 AM - 10:00 PM</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2 transition-colors">
                  Drop us a Line
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="First name ..."
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Last name ..."
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email address ..."
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone number ..."
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your message ..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Spa Location Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors">Spa Location</h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 transition-colors">Dhaka</h3>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700 overflow-hidden transition-colors">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <MapPin className="h-8 w-8 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-1 transition-colors">Address: Road</p>
                      <p className="text-gray-600 dark:text-gray-400 mb-1 transition-colors">Address: Road</p>
                      <p className="text-gray-600 dark:text-gray-400 transition-colors">11,Rabindra Near Dhaka Bank</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Phone className="h-8 w-8 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg transition-colors">
                        01738001055
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Mail className="h-8 w-8 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold transition-colors">
                        blissspabd@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Spa Location Map"
                  width={800}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </motion.div>
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
                <div className="text-2xl font-bold text-amber-400">BLISS SPA</div>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed transition-colors">
                If you want a soothing and relaxing time of your life, book us now!!
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
              <Button className="bg-red-500 hover:bg-red-600 text-white mt-6 w-full">Book Now</Button>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Contact</h4>
              <div className="space-y-4 text-gray-300 dark:text-gray-400 transition-colors">
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
                <h5 className="font-semibold mb-3 text-amber-400">Opening Hours</h5>
                <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400 transition-colors">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>Saturday - Friday 10:00 - 22:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Quick Link</h4>
              <ul className="space-y-3 text-gray-300 dark:text-gray-400 transition-colors">
                <li>
                  <Link href="/about" className="hover:text-amber-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <Link href="/packages" className="hover:text-amber-400 transition-colors">
                    Package
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Best Services */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Best Service</h4>
              <ul className="space-y-3 text-gray-300 dark:text-gray-400 transition-colors">
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Eye & Shadow
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Swedish Massage
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Facial Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Facial & Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-400 transition-colors">
                    Lifting Facial
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 text-center transition-colors">
            <p className="text-gray-400">Copyright blissspabd.com 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
