"use client";
import CountUp from "react-countup";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { PhoneCall } from "lucide-react";
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

const faqData = [
  {
    question: "What Are Your Services?",
    answer:
      "We have a variety of services available for both men and women. So, you can get all kinds of spa services available here.",
  },
  {
    question: "What is The Difference Between CTG Spa BD and Other Spas?",
    answer:
      "CTG Spa BD offers premium quality services with experienced therapists, modern facilities, and personalized treatments that set us apart from other spas in chattogram.",
  },
  {
    question: "What Payment Methods Can be Made Here?",
    answer:
      "We accept cash payments, mobile banking (bKash, Nagad, Rocket), and major credit/debit cards for your convenience.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[150px] bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20 dark:from-gray-900/20 dark:to-gray-900/20"></div>
        <div className="container mx-auto max-w-5xl px-4 h-full flex items-center justify-center">
          <motion.div {...fadeInUp} className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              About Us
            </h1>
            <div className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-300">
              <Link
                href="/"
                className="hover:text-amber-800 transition-colors dark:hover:text-amber-400">
                Home
              </Link>
              <span>•</span>
              <span className="text-amber-800 dark:text-amber-400">
                About Us
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative">
              <div className="relative flex justify-center items-center">
                <Image
                  src="/images/about/about.webp?height=500&width=400"
                  alt="Spa Treatment"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 right-0 xl:-right-6 bg-white dark:bg-gray-700 p-10 rounded-xl shadow-xl border dark:border-gray-600">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-800 dark:text-amber-400">
                      <CountUp start={0} end={50} duration={1.75} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Happy Client
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6">
              <h2 className="text-4xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                One of The Best SPA & Therapy Centre in Chittagong
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Introducing{" "}
                  <span className="text-red-500 font-semibold">CTG SPA BD</span>
                  CTG SPA is a Professional Spa service Platform. Here we will
                  provide you only interesting content, which you will like very
                  much. We’re dedicated to providing you the best of Spa
                  service, with a focus on dependability and Spa service in
                  khulshi, Spa service in Chittagng. We’re working to turn our
                  passion for Spa service into a booming online website. We hope
                  you enjoy our Spa service as much as we enjoy offering them to
                  you. In the meantime, we want to maintain our good reputation
                  and take another step forward in the future, if you use the
                  services regularly. Ctgspa center was established in the
                  traditional Chittagong Khulshi, from then on, we have started
                  this service with skilled and trained staff.
                </p>
              </div>

              <Link href="/book-now" className="mt-5 inline-block">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                  Book Now
                </Button>
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
        className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid  lg:grid-cols-4 gap-8">
            {[
              { number: "1000", label: "Happy Client", color: "text-red-500" },
              {
                number: "14",
                label: "Treatment Success",
                color: "text-orange-500",
              },
              {
                number: "21",
                label: "Positive Review",
                color: "text-amber-500",
              },
              { number: "9", label: "Years Experience", color: "text-red-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center">
                <div className={`text-6xl font-bold ${stat.color} mb-2`}>
                  <CountUp
                    start={0}
                    end={Number(stat.number)}
                    duration={1.75}
                  />
                </div>
                <div className="text-gray-700 font-medium text-lg dark:text-gray-300">
                  {stat.label}
                </div>
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
        className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative">
              <Image
                src="/images/about/1.png?height=460&width=460"
                alt="New Formula Spa Treatment"
                width={460}
                height={460}
                className="w-[60%] rounded-xl "
              />
              <Image
                src="/images/about/2.webp?height=200&width=200"
                alt="New Formula Spa Treatment"
                width={300}
                height={300}
                className="w-[60%] rounded-xl absolute right-0 xl:-right-10 -bottom-20 shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 mt-16 md:mt-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                Affordable And Reliable, Book Now
              </h2>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                A class of wealthy and established first-class citizens had to
                go abroad for various business reasons, after traveling so far,
                they would definitely become physically ill, It was only
                possible when they went abroad for some work. I will keep
                posting more important posts on my Website for all of you.
                Please give your support and love. Thanks For Visiting Our Site
                Have a nice day!
              </p>

              <div className="flex  sm:flex-row gap-4">
                <Link href="/book-now">
                  <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                    Book Now
                  </Button>
                </Link>
                <Link href={"tel:01788453585"}>
                  <Button
                    variant="outline"
                    className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 text-lg bg-transparent">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Phone Call
                  </Button>
                </Link>
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
        className="py-20 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              {...fadeInUp}
              className="w-full h-full flex items-center justify-center flex-col ">
              <h2 className="text-4xl text-center md:text-left font-bold  text-gray-800 mb-8 dark:text-gray-200">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-600 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 text-left">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 pt-0">
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-t border-gray-100 dark:border-gray-600">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
