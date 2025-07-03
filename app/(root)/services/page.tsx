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
  Star,
  Mail,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
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

const services = [
  {
    title: "Body Scrub",
    description: "Enjoy A Refreshing Body Scrub",
    image: "body scrub spa treatment exfoliation",
    category: "Body Treatment",
  },
  {
    title: "Facial Spa",
    description: "Nourish Your Face With Our Advanced Facial Spa",
    image: "facial spa treatment skincare",
    category: "Facial Care",
  },
  {
    title: "Oil Bath",
    description: "Calm Your Body With The Most Relaxed Oil Bath",
    image: "oil bath massage therapy relaxation",
    category: "Bath Treatment",
  },
  {
    title: "Salt Bath",
    description: "Enjoy A Refreshing Salt Bath Therapy",
    image: "salt bath therapy wellness spa",
    category: "Bath Treatment",
  },
  {
    title: "Waxing & Threading",
    description: "Clean Your Hair With Our Advanced Waxing",
    image: "waxing threading beauty treatment",
    category: "Beauty Care",
  },
  {
    title: "Body Treatment",
    description: "Enjoy A Refreshing & Luxury Body Massage",
    image: "body treatment massage therapy",
    category: "Body Care",
  },
  {
    title: "Hot Stone Massage",
    description: "A Rejuvenating Healing Massage",
    image: "hot stone massage therapy relaxation",
    category: "Massage Therapy",
  },
  {
    title: "Hot Oil Massage",
    description: "Hot Oil Massage Therapy & Rejuvenating Hot Massage",
    image: "hot oil massage therapy wellness",
    category: "Massage Therapy",
  },
  {
    title: "Head Massage",
    description: "Hot Oil Massage Therapy & Rejuvenating Head Massage",
    image: "head massage therapy relaxation",
    category: "Massage Therapy",
  },
];

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6 leading-tight">
              Where to Find the Best Spa Service in Dhaka
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We offer a wide range of luxurious spa services designed to relax,
              rejuvenate, and revitalize your body and mind. Nestled in the
              heart of Dhaka, our serene environment provides the perfect escape
              from the hustle and bustle of everyday life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Spa Services Section */}
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
              Our Spa Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=250&width=350&query=${service.image}`}
                      alt={service.title}
                      width={350}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-red-500/90 text-white">
                        {service.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white"
                    >
                      Discover
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Our Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              At Bliss Spa BD, we provide an extensive range of spa services
              designed to pamper, rejuvenate, and invigorate you. Our offerings
              include soothing massages, revitalizing facials, luxurious body
              treatments, and meticulous nail care, all delivered by our team of
              skilled professionals in a tranquil and serene environment.
              Whether you're seeking relief from daily stress, a beauty boost,
              or simply a moment to unwind and revitalize, indulge in the
              ultimate relaxation and wellness journey with our premium spa
              services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Escape the Stress Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="border-2 border-gray-800 dark:border-gray-600 p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Escape the Stress: Full Body Massage Services in Dhaka
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Discover the ultimate escape from everyday stress with our
                exceptional full body massage services in Dhaka. Our expert
                therapists are skilled in a variety of massage techniques,
                ensuring a personalized and deeply relaxing experience. Whether
                you're seeking relief from muscle aches, improved circulation,
                or simply a tranquil experience, our full body massages are
                tailored to meet your unique needs. Rejuvenate your mind and
                body as you embark on a journey to total relaxation and
                well-being with our premium spa services.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Daily Work Hours */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-teal-600 to-teal-700 text-white"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h3 className="text-3xl font-bold mb-8">Daily Work Hours</h3>
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-8 w-8 text-red-400" />
              <div>
                <p className="text-xl font-semibold">Saturday</p>
                <p className="text-2xl font-bold">10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Spa Treatment"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <div className="bg-gray-800 dark:bg-gray-700 text-white p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">
                    500
                  </div>
                  <div className="text-sm">Positive Reviews</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=150&width=300"
                alt="Spa Therapy"
                width={300}
                height={150}
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">
                  The Love & Affection We Received From Our Clients
                </h3>
                <blockquote className="text-lg italic mb-4">
                  "You should try out their pedicure and manicure packages. It
                  is very soothing and relaxing. Must Recommended!!!!"
                </blockquote>
                <div className="text-right">
                  <p className="font-semibold">- Client A</p>
                  <p className="text-sm opacity-90">Bliss Spa Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
