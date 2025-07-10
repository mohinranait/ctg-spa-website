"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import { Clock } from "lucide-react";
import Link from "next/link";
import BookingForm from "@/components/common/booking-form";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function BookNowPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto max-w-5xl px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent">
              Appointment
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
                Appointment
              </span>
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
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Book an Appointment
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Book your spa appointment in CTG Spa BD. We serve you best spa
              service in Bangladesh.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <BookingForm />
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
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12">
              Daily Work Hours
            </h2>

            <div className="max-w-md mx-auto">
              <Card className="bg-white dark:bg-gray-800 shadow-xl border-0 dark:border dark:border-gray-700">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Saturday - Friday
                  </h3>
                  <p className="text-2xl font-bold text-red-500">
                    10:00 AM - 10:00 PM
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
