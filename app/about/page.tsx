"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Phone, MapPin, Clock, ChevronDown, PhoneCall, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const faqData = [
  {
    question: "What Are Your Services?",
    answer:
      "We have a variety of services available for both men and women. So, you can get all kinds of spa services available here.",
  },
  {
    question: "What is The Difference Between Bliss Spa BD and Other Spas?",
    answer:
      "Bliss Spa BD offers premium quality services with experienced therapists, modern facilities, and personalized treatments that set us apart from other spas in Dhaka.",
  },
  {
    question: "What Payment Methods Can be Made Here?",
    answer:
      "We accept cash payments, mobile banking (bKash, Nagad, Rocket), and major credit/debit cards for your convenience.",
  },
]

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

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
            <Link href="/" className="text-2xl font-bold text-amber-800 dark:text-amber-400 transition-colors">
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
                className="text-amber-800 font-semibold border-b-2 border-amber-800 dark:text-amber-400 dark:border-amber-400"
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
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-amber-50 dark:hover:text-amber-400"
                    >
                      Spa & Massage
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-amber-50 dark:hover:text-amber-400"
                    >
                      Body Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-amber-50 dark:hover:text-amber-400"
                    >
                      Facial Treatment
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-amber-50 hover:text-amber-800 dark:text-gray-300 dark:hover:bg-amber-50 dark:hover:text-amber-400"
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
              <a
                href="#"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors"
              >
                Gallery
              </a>
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
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-amber-800 font-semibold px-4 py-2 dark:text-amber-400"
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
              <a
                href="#"
                className="text-gray-700 hover:text-amber-800 dark:text-gray-300 dark:hover:text-amber-400 transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
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
        className="relative h-[300px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20 dark:from-gray-900/20 dark:to-gray-900/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div {...fadeInUp} className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200">About Us</h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Link href="/" className="hover:text-amber-800 transition-colors dark:hover:text-amber-400">
                Home
              </Link>
              <span>•</span>
              <span className="text-amber-800 dark:text-amber-400">About Us</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Spa Treatment"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 p-6 rounded-xl shadow-xl border dark:border-gray-600">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-800 dark:text-amber-400">SPA</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">WWW.BLISSSPABD.COM</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                One of The Leading SPA & Therapy Centre in Bangladesh
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Introducing <span className="text-red-500 font-semibold">Bliss SPA BD</span>, the most relaxing and
                  soothing Bangladesh Spa center. Our unique combination of soothing spa services and comfortable
                  surroundings will leave you feeling refreshed and relaxed.
                </p>

                <p>
                  We are a group of qualified professionals who are committed to ensuring that you are well trying your
                  things. We understand Bliss Spa business has essential to deliver a specialized in purpose. Our goal
                  is to make you feel comfortable and enjoy the moment. We offer a variety of spa treatments that are
                  tailored to meet the needs of each individual. Our goal is to provide our clients with an experience
                  that is truly relaxing and satisfying and to help them feel rejuvenated and refreshed. Come and
                  experience the difference today.
                </p>
              </div>

              <Link href="/book-now">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">Book Now</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "1k", label: "Happy Client", color: "text-red-500" },
              { number: "14", label: "Treatment Success", color: "text-orange-500" },
              { number: "21", label: "Positive Review", color: "text-amber-500" },
              { number: "9", label: "Years Experience", color: "text-red-500" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className={`text-6xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-700 font-medium text-lg dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Affordable Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=350"
                alt="New Formula Spa Treatment"
                width={350}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                Affordable And Reliable, Book Now
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                We always try our best to give the best service possible at an affordable price. Only we can assure a
                good service which is reliable and more affordable than any other center's out there. So, don't be late!
                Book now and enjoy a soothing experience with us.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                    Book Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg bg-transparent"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Phone Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-800 mb-8 dark:text-gray-200">Frequently Asked Questions</h2>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2">Download Catalog</Button>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqData.map((faq, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Collapsible
                    open={openFaq === index}
                    onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">
                          {faq.question}
                        </h3>
                        <ChevronDown
                          className={`h-5 w-5 text-red-500 transition-transform ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-b-lg border-t border-gray-100 dark:border-gray-600">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Contact Section */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-2xl font-bold text-amber-400">BLISS SPA</div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
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
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-500" />
                  <div>
                    <p>Address: Road 1,Dhanmondi</p>
                    <p>Dhaka Bank</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-500" />
                  <p>01738001065</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs">@</span>
                  </div>
                  <p>blissspa@gmail.com</p>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-3 text-amber-400">Opening Hours</h5>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Clock className="h-4 w-4 text-red-500" />
                  <span>Saturday - Friday 10:00 - 22:00</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-xl mb-6 text-amber-400">Quick Link</h4>
              <ul className="space-y-3 text-gray-300">
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
              <ul className="space-y-3 text-gray-300">
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

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">Copyright blissspabd.com 2024</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
