"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, Globe, Calendar } from "lucide-react";

import Image from "next/image";
import FlipCard, { FlipCardType } from "@/components/common/flip-card";
import SimplePackage from "@/components/common/package-card-simple";
import PackagesSection from "@/components/pages/home/pacakges-section";
import HomeSlider from "@/components/sliders/home-slider";
import CountUp from "react-countup";
import HomeBanner from "@/components/pages/home/home-banner";
import GoogleMap from "@/components/pages/google-map";
import ReviewSection from "@/components/pages/home/review-section";
import GallarySection from "@/components/pages/home/gallary-section";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 200 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const flipCards: FlipCardType[] = [
  {
    id: "1",
    front: {
      image: "/images/home/20230218_145836_0000.png?height=400&width=350",
      title: "Aromatherapy",
      subtitle: "A & MASSAGE",
    },
    back: {
      image: `/images/home/20230218_145505_0000.png?height=400&width=350`,
      title: "Essential Oils Therapy",
      description:
        "Relax your mind and body with our premium aromatherapy treatments using natural essential oils.",
      call: "80",
    },
  },
  {
    id: "2",
    front: {
      image: "/images/home/20230218_145836_0000.png?height=400&width=350",
      title: "Thai Traditional",
      subtitle: "BEAUTY & SPA",
    },
    back: {
      image: `/images/home/20230218_145505_0000.png?height=400&width=350`,
      title: "Traditional Thai Massage",
      description:
        "Experience authentic Thai massage techniques that heal the mind, calm the spirit, and rejuvenate your body.",
      call: "120",
    },
  },
  {
    id: "3",
    front: {
      image: "/images/home/20230218_145836_0000.png?height=400&width=350",
      title: "Swedish Back",
      subtitle: "BODY MASSAGE",
    },
    back: {
      image: `/images/home/20230218_145505_0000.png?height=400&width=350`,
      title: "Swedish Massage Therapy",
      description:
        "Deep tissue Swedish massage to relieve tension and promote complete relaxation of your body.",
      call: "100",
    },
  },
  {
    id: "4",
    front: {
      image: `/images/home/20230218_145505_0000.png?height=400&width=350`,
      title: "Swedish Back",
      subtitle: "BODY MASSAGE",
    },
    back: {
      image: "/images/home/20230218_145836_0000.png?height=400&width=350",
      title: "Swedish Massage Therapy",
      description:
        "Deep tissue Swedish massage to relieve tension and promote complete relaxation of your body.",
      call: "100",
    },
  },
];

const packages = [
  {
    id: "1",
    title: "Aromatherapy Massage",
    price: 4000,
    duration: "60 min",
    popular: true,
  },
  {
    id: "2",
    title: "Thai Traditional Massage",
    price: 3500,
    duration: "60 min",
    popular: false,
  },
  {
    id: "3",
    title: "Swedish Back Massage",
    price: 3500,
    duration: "60 min",
    popular: true,
  },
  {
    id: "4",
    title: "Hot Stone Therapy",
    price: 5000,
    duration: "75 min",
    popular: false,
  },
  {
    id: "5",
    title: "Deep Tissue Massage",
    price: 4500,
    duration: "90 min",
    popular: true,
  },
  {
    id: "6",
    title: "Couples Spa Package",
    price: 8000,
    duration: "120 min",
    popular: false,
  },
];

export default function CtgSpaWebsite() {
  return (
    <>
      {/* <HomeSlider /> */}

      <HomeBanner />

      {/* Service Images Grid */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className=" xl:py-8 bg-gray-50 dark:bg-gray-800  xl:h-[300px] transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-2">
          <div className="grid  md:grid-cols-3 gap-2">
            {[
              {
                title: "Facial Care",
                image: "images/home/20230218_150500_0000.png",
              },

              {
                title: "Body Treatment",
                image: "images/home/20230218_150309_0000.png",
              },
              {
                title: "Spa & Massage",
                image: "images/home/20230218_145836_0000.png",
              },
              // {
              //   title: "Aromatherapy",
              //   image: "images/home/20230218_145836_0000.png",
              // },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                // whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer">
                <Image
                  src={`/${service.image}?height=250&width=200&query=${service.image}`}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="w-full xl:h-[250px] object-cover "
                />
                <div className="absolute inset-0 bg-black bg-opacity-40  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
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
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <motion.h2
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl xl:text-4xl font-bold text-white py-1 bg-[#3D0808] dark:text-amber-400 mb-4 transition-colors">
              Welcome to CTG spa in Khulshi, Chittagong, Bangladesh
            </motion.h2>
            <h3 className="text-2xl xl:text-4xl xl:max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-5 transition-colors">
              Best Spa & Massage Service in Chittagong
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 transition-colors">
              <p>
                *The Best body Spa place in Ctg** They always have the ability
                to provide all kinds of services, their activities are conducted
                in the most modern way in the body spa world, many types of body
                massage services are provided here. Some of the notable ones are
                as follows:-Manicure & Pedicure, Fooy-Head-Shuoulder.Traditional
                thai. Atoms oil Massacres. Thai Aroma Massages. Swedish Massage.
                Body Scrub. Nurumosculor Massages. Hot Oil Massages. Deep tissue
                Massages. Sports Massages. Jacuzzi & SteamBoth.G- spa universal
                package. 4 Hand Massages. Couple Massages. Aromatherapy Massages
                & Body Scrub. Swedish Massage & Body Scrub.. We enter many more
                types of such services. They have taken the responsibility of
                bringing back the weak body to independence, a group of women
                trained from abroad are coming forward 24 hours a day to provide
                services without hesitation and fear. This class of Bangladesh
                is always waiting considering the health of the human body.
                There is a longing request to come here even just once and take
                the service. Therefore, if you want to get this recognition of
                your skills, you will deny them immediately. If there is an
                exception to what has been said, I like to serve. Their
                profession is service, their addiction is service. I wish you
                that we can move forward by maintaining our reputation through
                the service and care of the clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section
        // variants={staggerContainer}
        // initial="initial"
        // whileInView="animate"
        // viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="px-5 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                subtitle: "Call us anytime",
                content: "+8801788453585",
              },
              {
                icon: MapPin,
                title: "Location",
                subtitle: "Visit our spa",
                content: "Khulshi, Chittagong",
              },
              {
                icon: Clock,
                title: "Office Hours",
                subtitle: "We're open Everyday",
                content: "10:00 AM - 10:00 PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="">
                <Card className="text-center p-8 shadow-[20px_-20px_80px_0px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border dark:border-gray-700">
                  <CardContent className="space-y-2">
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
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        // viewport={{ once: true }}
        className="py-16 bg-[#FFFFFF] dark:bg-gray-900 transition-colors duration-300">
        <div className="container max-w-5xl overflow-hidden mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative">
              <div className="flex justify-end  ">
                <div className=" shadow-2xl mr-10 xl:-left-6 z-40 bg-white  dark:bg-gray-700 p-5 min-w-[200px]  dark:border-gray-600">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#ef4444] dark:text-slate-50">
                      <CountUp start={0} end={400} duration={4.75} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Happy Client
                    </div>
                  </div>
                </div>
              </div>
              <Image
                src="/images/about.webp?height=400&width=500"
                alt="Spa Interior"
                width={500}
                height={400}
                className=" shadow-lg w-full"
              />
            </motion.div>
            <div className="space-y-3">
              <h4 className="w-full text-white  text-xl lg:text-4xl bg-[#952525] py-1 px-2 text-center">
                About us
              </h4>
              <motion.div
                initial={{ opacity: 0, x: -150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-3 bg-[#E2E2E2] dark:bg-[#1F2936] p-4 rounded">
                <motion.h2 className="text-xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-2 transition-colors">
                  Best Spa in Khulshi
                </motion.h2>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  To tell you more about us, first of all, I would like to tell
                  you, The best service in Ctgspa of Bangladesh.. I can proudly
                  say that spa services were not available in Bangladesh at one
                  time, how did it appear in Bangladesh in stages??
                </p>
                <h3 className=" text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                  Enjoy Best Spa & Body Massage
                </h3>

                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  Although we have gradually become accustomed to taking this
                  spa service, if we want, it is suddenly not possible to take
                  this service abroad, considering these issues, Ctgspa has
                  taken an initiative to establish an institution in Bangladesh
                  in the style of a foreign country.
                </p>

                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 transition-colors">
                  Best Spa Center In Khulshi Chittagong Area || Get 100%
                  Satisfaction Guaranteed
                </h4>
                <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed transition-colors">
                  Due to the weather in Bangladesh, which usually makes us sick
                  here, we have organized this service to feel physically
                  strong. Since we are the first, we want to challenge the whole
                  of Bangladesh and prove that we are the best of Bangladesh.
                </p>
              </motion.div>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                <Calendar /> Read More
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Gallery */}

      <motion.section
        // variants={staggerContainer}
        // initial="initial"
        // whileInView="animate"
        // viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-7">
            <h4 className="w-full text-white text-xl lg:text-2xl bg-[#952525] py-1 px-2 text-center">
              Best Services from The Best Spa in Chittagong
            </h4>
          </div>

          <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flipCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer">
                <FlipCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <PackagesSection />

      <section>
        <div className="container  py-10 max-w-5xl mx-auto px-4 sm:grid grid-cols-2 gap-5">
          <div className="h-full  relative w-full  ">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[70%]">
                <Image
                  src={"/2.png"}
                  width={335}
                  height={335}
                  alt="image"
                  className="  sm:w-[180px] sm:h-[170px] md:w-[200px] md:h-[180px] lg:w-[270px] lg:h-[250px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="w-[60%] absolute right-0 top-[100px] sm:left-[100px] md:left-[180px] ">
                <Image
                  src={"/1.png"}
                  width={335}
                  height={335}
                  alt="image"
                  className="  sm:w-[180px] sm:h-[170px] md:w-[200px] md:h-[180px] lg:w-[270px] lg:h-[250px]"
                />
              </motion.div>
            </div>
          </div>
          <div className="space-y-6 pt-32 sm:pt-0">
            <motion.h4
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="sm: text-xl md:text-4xl font-semibold lg:pr-28">
              Reliable and Affordable Spa Service, Call Now
            </motion.h4>
            <p>
              We always try our best spa service possible at an reasonable
              price. Only we can ensure a great service which is more affordable
              than any other center’s out there. So, don’t be late! call now and
              enjoy a soothing experience with the best spa in Khulshi!!!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <Link href={"/book-now"}>
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white">
                  Book Now
                </Button>
              </Link>
              <Link href={"tel:01788453585"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-white hover:text-red-500 bg-transparent">
                  Call Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallary section */}
      <GallarySection />

      {/* Testimonials */}
      <ReviewSection />

      <div className="container py-6 px-4 max-w-5xl mx-auto">
        <GoogleMap />
      </div>
    </>
  );
}
