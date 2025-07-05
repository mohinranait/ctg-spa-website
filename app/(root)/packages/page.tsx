"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PhoneCall, Star, Sparkles } from "lucide-react";
import Link from "next/link";

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
      "We at CTG Spa BD insist on providing our customers the utmost quality service possible, without any need for harsh chemicals or stainless steel tools. We promise that your pedicure and manicure will be done using gentle techniques using only natural ingredients.",
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
        className="relative py-4  bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-gray-900/30 dark:to-gray-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl dark:bg-gray-700/30"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-200/30 rounded-full blur-xl dark:bg-gray-600/30"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-orange-200/30 rounded-full blur-xl dark:bg-gray-500/30"></div>
        </div>
        <div className="container mx-auto max-w-5xl px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-2xl font-bold  text-gray-800 bg-gradient-to-r from-amber-800 to-red-600 bg-clip-text text-transparent dark:text-gray-200">
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
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
            {packageData.map((pkg, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="relative shadow-[0_0_10px_0_rgba(0,0,0,0.5)] p-0 gap-0 overflow-hidden group hover:shadow-2xl transition-all duration-500 bg-[#FAF4F1] backdrop-blur-sm dark:bg-gray-800/80 dark:border dark:border-gray-700 rounded-3xl  border border-gray-300 hover:dark:shadow-xl">
                  {/* Header */}
                  <div
                    className={` bg-black  py-3 text-white relative overflow-hidden`}
                  >
                    <h3 className="text-xl font-semibold text-center">
                      {pkg.title}
                    </h3>
                  </div>

                  <CardContent className="px-2">
                    {/* Pricing */}
                    <div className=" gap-3 mb-4">
                      <div className="text-center p-4 const sliders flex justify-center flex-col items-center dark:from-gray-900 dark:to-gray-800 dark:border-gray-700">
                        <div className="text-5xl  relative font-bold text-red-400 dark:text-red-400">
                          <span className="absolute text-gray-600 -left-3 text-base top-0">
                            ৳
                          </span>

                          {pkg.price60}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          /60 Min
                        </div>
                      </div>
                      <div className="text-center px-4 py-2 const sliders flex justify-center flex-col items-center dark:from-gray-900 dark:to-gray-800 dark:border-gray-700">
                        <div className="text-5xl  relative font-bold text-red-400 dark:text-red-400">
                          <span className="absolute text-gray-600 -left-3 text-base top-0">
                            ৳
                          </span>

                          {pkg.price90}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          /90 Min
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-center leading-relaxed mb-8 text-sm dark:text-gray-400">
                      {pkg.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-center  gap-3 mb-4">
                      <Link href="/book-now" className="">
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          Book Appointment
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        className=" border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400"
                      >
                        Call Now
                      </Button>
                    </div>

                    {/* Bottom Text */}
                    <p className="text-center text-sm text-gray-500 font-medium dark:text-gray-400">
                      Book Your Appointment Right Now
                    </p>
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
        className="py-16 bg-gradient-to-r from-amber-800 via-red-600 to-pink-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl dark:bg-gray-900/30"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl dark:bg-gray-900/30"></div>
        </div>
        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
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
