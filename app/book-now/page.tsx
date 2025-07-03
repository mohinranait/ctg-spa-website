"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Clock, ChevronDown, Facebook, Instagram, Linkedin, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function BookNowPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Appointment booked:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-300">
      {/* Responsive Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg border-b dark:border-gray-700 sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-amber-800 dark:text-amber-400">
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
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-amber-50 dark:hover:bg-gray-700 hover:text-amber-800 dark:hover:text-amber-400"
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
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
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
                className="text-gray-700 dark:text-gray-300 hover:text-amber-800 dark:hover:text-amber-400 transition-colors px-4 py-2"
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
        className="relative h-[300px] bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent">
              Appointment
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Link href="/" className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors">
                Home
              </Link>
              <span>•</span>
              <span className="text-red-500 dark:text-red-400 font-semibold">Appointment</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Booking Form Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Book your spa appointment in Bliss Spa BD. We serve you best spa service in Bangladesh.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700 overflow-hidden">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* First Row */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name ..."
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number ..."
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address ..."
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Row */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Input
                        type="date"
                        name="date"
                        placeholder="Choose Date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="time"
                        name="time"
                        placeholder="Choose Time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <Select onValueChange={(value) => handleSelectChange("service", value)} required>
                        <SelectTrigger className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                          <SelectValue placeholder="Spa Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                          <SelectItem
                            value="body-scrub"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Body Scrub
                          </SelectItem>
                          <SelectItem
                            value="aromatherapy-massage"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Aromatherapy Massage
                          </SelectItem>
                          <SelectItem
                            value="thai-massage"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Thai Traditional Massage
                          </SelectItem>
                          <SelectItem
                            value="swedish-massage"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Swedish Back Massage
                          </SelectItem>
                          <SelectItem
                            value="pedicure-manicure"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Pedicure & Manicure
                          </SelectItem>
                          <SelectItem
                            value="chocolate-scrub"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Chocolate Scrub
                          </SelectItem>
                          <SelectItem
                            value="bliss-special"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Bliss Special Massage
                          </SelectItem>
                          <SelectItem
                            value="facial-treatment"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Facial Treatment
                          </SelectItem>
                          <SelectItem
                            value="body-treatment"
                            className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            Body Treatment
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message ..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Appointment Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Daily Work Hours Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12">Daily Work Hours</h2>

            <div className="max-w-md mx-auto">
              <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Saturday - Friday</h3>
                  <p className="text-2xl font-bold text-red-500">10:00 AM - 10:00 PM</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-2xl font-bold text-amber-400">BLISS SPA</div>
              </div>
              <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
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
              <Link href="/book-now">
                <Button className="bg-red-500 hover:bg-red-600 text-white mt-6 w-full">Book Now</Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Contact</h4>
              <div className="space-y-4 text-gray-300 dark:text-gray-400">
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
                <div className="flex items-center space-x-2 text-gray-300 dark:text-gray-400">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>Saturday - Friday 10:00 - 22:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Quick Link</h4>
              <ul className="space-y-3 text-gray-300 dark:text-gray-400">
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
              <ul className="space-y-3 text-gray-300 dark:text-gray-400">
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

          <div className="border-t border-gray-700 dark:border-gray-600 pt-8 text-center">
            <p className="text-gray-400">Copyright blissspabd.com 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
