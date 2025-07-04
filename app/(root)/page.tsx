"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Clock, Star, Globe } from "lucide-react";

import Image from "next/image";
import FlipCard, { FlipCardType } from "@/components/common/flip-card";
import SimplePackage from "@/components/common/package-card-simple";
import PackagesSection from "@/components/pages/home/pacakges-section";
import HomeSlider from "@/components/sliders/home-slider";
import CountUp from "react-countup";
import HomeBanner from "@/components/pages/home/home-banner";

const fadeInUp = {
  initial: { opacity: 0, y: 100 },
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
        className=" xl:py-8 bg-gray-50 dark:bg-gray-800  xl:h-[300px] transition-colors duration-300"
      >
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
                className="relative group cursor-pointer"
              >
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
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <motion.h2
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-xl md:text-2xl xl:text-4xl font-bold text-white py-1 bg-[#3D0808] dark:text-amber-400 mb-4 transition-colors"
            >
              Welcome to CTG Spa BD Best Spa in Dhaka
            </motion.h2>
            <h3 className="text-2xl xl:text-4xl xl:max-w-xl mx-auto text-gray-700 dark:text-gray-300 mb-5 transition-colors">
              Best Spa & Massage Service in Dhaka
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 transition-colors"
            >
              <p>
                Welcome to CTG Spa, your premier destination for relaxation and
                rejuvenation in Dhaka. We offer a comprehensive range of spa and
                massage services designed to help you unwind, refresh, and
                restore your body and mind.
              </p>
              <p>
                Our experienced therapists use only the finest natural products
                and time-tested techniques to ensure you receive the highest
                quality treatment. From traditional massages to modern spa
                therapies, we have something for everyone.
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
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container max-w-5xl mx-auto px-4">
          <div className="px-5 grid md:grid-cols-3 gap-6">
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
              <motion.div key={index} variants={fadeInUp} className="">
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container max-w-5xl mx-auto px-4">
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
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/about.webp?height=400&width=500"
                alt="Spa Interior"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 left-0 xl:-left-6 z-40 bg-white dark:bg-gray-700 p-10 rounded-xl shadow-xl border dark:border-gray-600">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#ef4444] dark:text-slate-50">
                    <CountUp start={0} end={100} duration={1.75} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Happy Client
                  </div>
                </div>
              </div>
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
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-amber-800 dark:bg-amber-600 text-white mb-4 transition-colors">
              Best Services from The Best Spa in Dhaka
            </Badge>
          </div>

          <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-4">
            {flipCards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <FlipCard card={card} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Packages Section */}
      <PackagesSection />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-amber-800 to-orange-800 dark:from-amber-900 dark:to-orange-900 text-white text-center transition-colors duration-300"
      >
        <div className="container max-w-5xl mx-auto px-4">
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
        <div className="container max-w-5xl mx-auto px-4 text-center">
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
                "Amazing experience at CTG Spa! The staff is professional and
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
