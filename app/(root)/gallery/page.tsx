"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
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

const scaleIn = {
  initial: { opacity: 0, scale: 0.5 },

  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8 },
};

const galleryImages = [
  {
    id: 1,
    title: "CTG SPA",
    subtitle: "Premium Spa Experience",
    image: "/images/blogs/image-6.jpg",
    size: "large",
    category: "Spa Treatment",
  },
  {
    id: 2,
    title: "Spa & Massage",
    subtitle: "Relaxation Therapy",
    image: "/images/blogs/image-3-1.jpg",
    size: "medium",
    category: "Massage",
  },
  {
    id: 3,
    title: "Spa and Massage",
    subtitle: "Ultimate Wellness",
    image: "/images/blogs/image-10.jpg",
    size: "medium",
    category: "Wellness",
  },
  {
    id: 4,
    title: "Welcome To The best Spa in Dhaka City",
    subtitle: "Premium Services",
    image: "/images/blogs/image-11.jpg",
    size: "large",
    category: "Welcome",
    featured: true,
  },
  {
    id: 5,
    title: "BEAUTY & SPA",
    subtitle: "Facial Treatment",
    image: "/images/blogs/image-17.jpg",
    size: "medium",
    category: "Beauty",
  },
  {
    id: 6,
    title: "Spa & massage",
    subtitle: "Body Treatment",
    image: "/images/blogs/image-11.jpg",
    size: "medium",
    category: "Body Care",
  },
  {
    id: 7,
    title: "Massage Treatment",
    subtitle: "Therapeutic Massage",
    image: "/images/blogs/image-6.jpg",
    size: "small",
    category: "Massage",
  },
  {
    id: 8,
    title: "Body Massage",
    subtitle: "Relaxing Experience",
    image: "/images/blogs/image-11.jpg",
    size: "small",
    category: "Body Massage",
  },
  {
    id: 9,
    title: "Massage Therapy",
    subtitle: "Professional Service",
    image: "/images/blogs/image-10.jpg",
    size: "small",
    category: "Therapy",
  },
  {
    id: 10,
    title: "BEAUTY & SPA",
    subtitle: "Complete Wellness",
    image: "/images/blogs/image-6.jpg",
    size: "small",
    category: "Beauty",
  },
];
// Animation variants for different directions
const animationVariants = {
  fromTop: {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fromBottom: {
    hidden: {
      opacity: 0,
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fromLeft: {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
  fromRight: {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  },
} as const;

// Function to get animation direction based on index
const getAnimationDirection = (
  index: number
): keyof typeof animationVariants => {
  const directions: (keyof typeof animationVariants)[] = [
    "fromTop",
    "fromRight",
    "fromBottom",
    "fromLeft",
  ];
  return directions[index % 4];
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 to-red-900/10 dark:from-amber-900/20 dark:to-red-900/20"></div>
        <div className="container mx-auto max-w-5xl px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 dark:text-gray-200 bg-gradient-to-r from-amber-800 to-red-600 dark:from-amber-400 dark:to-red-400 bg-clip-text text-transparent">
              Our Gallery
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
                Our Gallery
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our SPA Gallery Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our SPA Gallery
            </h2>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((item, index) => {
              const direction = getAnimationDirection(index);
              return (
                <motion.div
                  key={item.id}
                  variants={animationVariants[direction]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    margin: "-100px",
                    amount: 0.3,
                  }}
                  className={`
                  ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                  ${item.size === "medium" ? "md:row-span-1" : ""}
                  ${item.size === "small" ? "md:row-span-1" : ""}
                  ${item.featured ? "lg:col-span-2" : ""}
                `}
                >
                  <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800">
                    <div className="relative overflow-hidden">
                      <Image
                        src={`${item?.image}?height=${
                          item.size === "large"
                            ? "400"
                            : item.size === "medium"
                            ? "300"
                            : "250"
                        }&width=${
                          item.size === "large" ? "600" : "400"
                        }&query=${item.image}`}
                        alt={item.title}
                        width={item.size === "large" ? 600 : 400}
                        height={
                          item.size === "large"
                            ? 400
                            : item.size === "medium"
                            ? 300
                            : 250
                        }
                        className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                          item.size === "large" ? "h-80 md:h-96" : "h-64"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            item.featured ? "bg-purple-500" : "bg-red-500"
                          }/90 text-white`}
                        >
                          {item.category}
                        </Badge>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.subtitle}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Our Stories Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-gray-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Our Stories
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-2">
                  <CountUp start={0} end={200} duration={1.99} />
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Happy Client
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-red-500 dark:text-red-400 mb-2">
                  <CountUp start={0} end={600} duration={2.5} />
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Treatment Complete
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* New Spa Place Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid lg:grid-cols-2 gap-12  max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Image
                src="/images/gallary.webp?height=400&width=500"
                alt="New Spa Place in Dhaka"
                width={500}
                height={400}
                className="w-full "
              />
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                  About Our Journey From 2015 Until Now
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Bliss Spa Dhaka offers a wide range of luxurious services,
                  from rejuvenating facials to indulgent massages, designed to
                  help you escape from the stresses of daily life and leave you
                  feeling relaxed and renewed. Let their expert therapists take
                  care of you and provide an unforgettable spa experience.
                </p>
                <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                  Read More
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                The New Spa Place we Built in Dhaka
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                Opportunity refers to a favorable set of circumstances that
                allows for progress, advancement, or success in a particular
                endeavor. It can arise from various sources such as career,
                education, business, or personal development and requires a
                readiness to take action and make the most of the situation.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 text-lg shadow-lg">
                Read More
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
