"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, Globe } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

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

export default function BlissSpaWebsite() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            <motion.div {...fadeInUp} className="space-y-6">
              <h1 className="text-5xl font-bold text-amber-900 dark:text-amber-400 transition-colors">
                BLISS SPA
              </h1>
              <div className="flex items-center space-x-4 text-amber-800 dark:text-amber-400 transition-colors">
                <Phone className="h-5 w-5" />
                <span>+8801738 001065</span>
              </div>
              <div className="flex items-center space-x-4 text-amber-800 dark:text-amber-400 transition-colors">
                <Globe className="h-5 w-5" />
                <span>www.blissspadh.com</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Spa Treatment"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Service Images Grid */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Spa & Massage", image: "spa massage treatment" },
              { title: "Body Treatment", image: "body treatment therapy" },
              { title: "Facial Care", image: "facial treatment skincare" },
              { title: "Aromatherapy", image: "aromatherapy essential oils" },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <Image
                  src={`/placeholder.svg?height=200&width=200&query=${service.image}`}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold">
                    {service.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <Badge className="bg-amber-800 dark:bg-amber-600 text-white mb-4 transition-colors">
              Welcome to Bliss Spa BD
            </Badge>
            <h2 className="text-4xl font-bold text-amber-900 dark:text-amber-400 mb-6 transition-colors">
              Best Spa in Dhaka
            </h2>
            <h3 className="text-2xl text-gray-700 dark:text-gray-300 mb-8 transition-colors">
              Best Spa & Massage Service in Dhaka
            </h3>
            <div className="max-w-4xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 transition-colors">
              <p>
                Welcome to Bliss Spa, your premier destination for relaxation
                and rejuvenation in Dhaka. We offer a comprehensive range of spa
                and massage services designed to help you unwind, refresh, and
                restore your body and mind.
              </p>
              <p>
                Our experienced therapists use only the finest natural products
                and time-tested techniques to ensure you receive the highest
                quality treatment. From traditional massages to modern spa
                therapies, we have something for everyone.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                subtitle: "Call us anytime",
                content: "+8801738 001065",
              },
              {
                icon: MapPin,
                title: "Location",
                subtitle: "Visit our spa",
                content: "Dhaka, Bangladesh",
              },
              {
                icon: Clock,
                title: "Office Hours",
                subtitle: "We're open daily",
                content: "10:00 AM - 10:00 PM",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-8 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border dark:border-gray-700">
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center transition-colors">
                      <item.icon className="h-8 w-8 text-amber-800 dark:text-amber-400 transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 transition-colors">
                      {item.subtitle}
                    </p>
                    <p className="text-amber-800 dark:text-amber-400 font-medium transition-colors">
                      {item.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-red-500 text-white mb-4">About us</Badge>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors">
              Best Spa in Dhaka
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                Enjoy The Best Spa & Body Massage
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                Experience ultimate relaxation with our premium spa and massage
                services. Our skilled therapists provide personalized treatments
                in a serene environment designed to rejuvenate your body and
                soul.
              </p>

              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                Book The Perfect Spa Collection Therapy Along 1
              </h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                Discover our signature collection of therapeutic treatments that
                combine traditional techniques with modern wellness practices.
                Each session is tailored to your specific needs and preferences.
              </p>

              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Read More
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Spa Interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Gallery */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-800 dark:bg-amber-600 text-white mb-4 transition-colors">
              Best Services from The Best Spa in Dhaka
            </Badge>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "hot stone massage therapy",
              "beauty spa facial treatment",
              "thai traditional massage",
              "aromatherapy essential oils",
              "couples massage room",
              "body scrub treatment",
              "reflexology foot massage",
              "deep tissue massage",
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <Image
                  src={`/placeholder.svg?height=250&width=250&query=${service}`}
                  alt={`Service ${index + 1}`}
                  width={250}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 transition-colors">
              Our Packages
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { price: "4000", duration: "90 min", title: "Premium Package" },
              { price: "3500", duration: "75 min", title: "Deluxe Package" },
              { price: "3500", duration: "60 min", title: "Standard Package" },
              { price: "2000", duration: "45 min", title: "Basic Package" },
              { price: "3500", duration: "90 min", title: "Couple Package" },
              { price: "3500", duration: "120 min", title: "Full Day Package" },
            ].map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow border-2 hover:border-amber-200 dark:hover:border-amber-600 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardContent className="space-y-4">
                    <div className="text-3xl font-bold text-amber-800 dark:text-amber-400 transition-colors">
                      ৳{pkg.price}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 transition-colors">
                      {pkg.duration}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                      {pkg.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full border-amber-800 dark:border-amber-400 text-amber-800 dark:text-amber-400 hover:bg-amber-800 dark:hover:bg-amber-600 hover:text-white bg-transparent transition-colors"
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-900 dark:to-orange-900 text-white text-center transition-colors duration-300"
      >
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold">
              Affordable and Reliable Spa Service.
            </h2>
            <h3 className="text-2xl">Book Now</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                Book Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-800 bg-transparent"
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12 transition-colors">
              The Love & Affection We Received From Our Clients
            </h2>
            <div className="bg-amber-800 dark:bg-amber-900 text-white p-8 rounded-lg max-w-2xl mx-auto transition-colors">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-lg italic mb-4">
                "Amazing experience at Bliss Spa! The staff is professional and
                the treatments are top-notch. I feel completely relaxed and
                rejuvenated after every visit."
              </p>
              <p className="font-semibold">- Sarah Ahmed</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
