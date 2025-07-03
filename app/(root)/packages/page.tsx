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
  PhoneCall,
  Facebook,
  Instagram,
  Linkedin,
  Star,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const packageData = [
  {
    title: "Aromatherapy Massage",
    price60: "4000",
    price90: "5500",
    description:
      "Our aromatherapy massage is designed to help you wind down and relax after a long day. Our team of experts will use select essential oils to soothe and relieve your tensions, leaving you feeling refreshed and rejuvenated. You're guaranteed to feel the effects within minutes!",
    gradient: "from-purple-600 to-pink-600",
    icon: "🌸",
    popular: false,
  },
  {
    title: "Thai Traditional Massage",
    price60: "3500",
    price90: "5000",
    description:
      "Thai Traditional Massage is known for its ability to relieve stress and tension. Our 100% Guarantee guarantees that you will be completely satisfied with the results. If not, we'll give you a full refund. So book now and experience the difference!",
    gradient: "from-green-600 to-teal-600",
    icon: "🧘‍♀️",
    popular: true,
  },
  {
    title: "Swedish Back Massage",
    price60: "3500",
    price90: "5000",
    description:
      "Our aromatherapy massage is designed to help you wind down and relax after a long day. Our team of experts will use select essential oils to soothe and relieve your tensions, leaving you feeling refreshed and rejuvenated. You're guaranteed to feel the effects within minutes!",
    gradient: "from-blue-600 to-cyan-600",
    icon: "💆‍♀️",
    popular: false,
  },
  {
    title: "Pedicure & Manicure",
    price60: "2000",
    price90: "4000",
    description:
      "We at Bliss Spa BD insist on providing our customers the utmost quality service possible, without any need for harsh chemicals or stainless steel tools. We promise that your pedicure and manicure will be done using gentle techniques using only natural ingredients.",
    gradient: "from-pink-600 to-rose-600",
    icon: "💅",
    popular: false,
  },
  {
    title: "Chocolate Scrub",
    price60: "4500",
    price90: "9000",
    description:
      "Do you love chocolate? We sure do! And, we also love doing chocolate scrub. With strong, warm & soothing aroma of chocolate give your body & soul a relaxing time.",
    gradient: "from-amber-600 to-orange-600",
    icon: "🍫",
    popular: false,
  },
  {
    title: "Bliss Special Massage",
    price60: "8000",
    price90: "10000",
    description:
      "Bliss presents special massage service to our special guests. With the confidence, love & suggestions from many of our valuable clients, we can undoubtly prefer you to try this one. Why so special? Well, let it be a surprise!",
    gradient: "from-indigo-600 to-purple-600",
    icon: "✨",
    popular: true,
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-gray-900/30 dark:to-gray-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl dark:bg-gray-700/30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl dark:bg-gray-600/30"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-200/30 rounded-full blur-xl dark:bg-gray-500/30"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-amber-800 to-red-600 bg-clip-text text-transparent dark:text-gray-200">
              Package's
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Link
                href="/"
                className="hover:text-amber-800 transition-colors dark:hover:text-amber-500"
              >
                Home
              </Link>
              <span>•</span>
              <span className="text-red-500 font-semibold dark:text-red-400">
                Package's
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Packages Grid */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {packageData.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border dark:border-gray-700 hover:dark:shadow-xl">
                  {pkg.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Header */}
                  <div
                    className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-3xl">{pkg.icon}</span>
                        <h3 className="text-xl font-bold">{pkg.title}</h3>
                      </div>
                      <Sparkles className="w-6 h-6 opacity-70" />
                    </div>
                  </div>

                  <CardContent className="p-8">
                    {/* Pricing */}
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border dark:from-gray-900 dark:to-gray-800 dark:border-gray-700">
                        <div className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                          ৳
                        </div>
                        <div className="text-3xl font-bold text-red-500 dark:text-red-400">
                          {pkg.price60}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          60 Min
                        </div>
                      </div>
                      <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl border border-amber-200 dark:from-gray-900 dark:to-gray-800 dark:border-gray-700">
                        <div className="text-sm text-gray-600 mb-1 dark:text-gray-400">
                          ৳
                        </div>
                        <div className="text-3xl font-bold text-amber-600 dark:text-amber-500">
                          {pkg.price90}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          90 Min
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-8 text-sm dark:text-gray-400">
                      {pkg.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-4">
                      <Link href="/book-now" className="flex-1">
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          Book Appointment
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className="flex-1 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400"
                      >
                        <PhoneCall className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </div>

                    {/* Bottom Text */}
                    <p className="text-center text-sm text-gray-500 font-medium dark:text-gray-400">
                      Book Your Appointment Right Now
                    </p>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none dark:via-gray-900/80"></div>
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
        className="py-16 bg-gradient-to-r from-amber-800 via-red-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl dark:bg-gray-900/30"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl dark:bg-gray-900/30"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="space-y-6">
            <h2 className="text-4xl font-bold dark:text-gray-100">
              Ready to Experience Bliss?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto dark:text-gray-300">
              Choose your perfect package and let us take care of your wellness
              journey. Book now for an unforgettable spa experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-now">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-gray-900 dark:text-amber-500 dark:hover:bg-gray-800"
                >
                  Book Your Package Now
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-red-600 bg-transparent shadow-xl transition-all duration-300 dark:border-gray-300 dark:hover:bg-gray-900 dark:hover:text-amber-500"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Call for Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
