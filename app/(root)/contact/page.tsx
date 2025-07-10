"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoogleMap from "@/components/pages/google-map";
import BookingForm from "@/components/common/booking-form";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto max-w-5xl px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent transition-colors">
              Contact
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300 transition-colors">
              <Link
                href="/"
                className="hover:text-amber-800 dark:hover:text-amber-400 transition-colors"
              >
                Home
              </Link>
              <span>•</span>
              <span className="text-red-500 dark:text-red-400 font-semibold transition-colors">
                Contact
              </span>
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
        <div className="container mx-auto max-w-5xl px-4">
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
                  src="/images/contact.png?height=400&width=400"
                  alt="Spa Relaxation"
                  width={400}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/70 to-transparent"></div>
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

              <BookingForm />
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
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors">
              Spa Location
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 transition-colors">
              Chattogram
            </h3>
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
                      <p className="text-gray-600 dark:text-gray-400 mb-1 transition-colors">
                        805 Zakir Hossain Rd, Khulshi,
                      </p>

                      <p className="text-gray-600 dark:text-gray-400 transition-colors">
                        Rd 4000, Chattogram
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Phone className="h-8 w-8 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg transition-colors">
                        01788453585
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <Mail className="h-8 w-8 text-red-500" />
                    </div>
                    <div>
                      <p className="text-gray-800 dark:text-gray-200 font-semibold transition-colors">
                        info@ctgspa.com
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
              <GoogleMap />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
