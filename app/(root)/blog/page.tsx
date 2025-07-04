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
  Calendar,
  User,
  Eye,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
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
      staggerChildren: 0.1,
    },
  },
};

const blogPosts = [
  {
    id: 1,
    title:
      "Full Body Massage Treatment: A Holistic Approach to Wellness and Relaxation",
    overlayTitle: "Full Body Massage Treatment",
    excerpt:
      "Discover the transformative power of full body massage therapy and how it can enhance your overall wellness journey.",
    image: "/images/blogs/image-3-1.jpg",
    category: "Hair Spa | The Pros & Cons",
    date: "March 15, 2024",
    author: "Dr. Sarah Ahmed",
    readTime: "5 min read",
    views: "2.1k",
  },
  {
    id: 2,
    title:
      "Soothing Soaks for Sensitive Skin: Learn How to Use Sea Salt for Bath",
    overlayTitle: "Use of Sea Salt for Bath",
    excerpt:
      "Explore the healing benefits of sea salt baths and learn the proper techniques for sensitive skin care.",
    image: "/images/blogs/image-6.jpg",
    category: "Skin Care",
    date: "March 12, 2024",
    author: "Maria Khan",
    readTime: "4 min read",
    views: "1.8k",
  },
  {
    id: 3,
    title: "More Than Magnesium: Exploring How to Use Epsom Salt Bath",
    overlayTitle: "Exploring How to Use Epsom Salt Bath",
    excerpt:
      "Uncover the science behind Epsom salt baths and their incredible benefits for muscle recovery and relaxation.",
    image: "/images/blogs/image-10.jpg",
    category: "Wellness",
    date: "March 10, 2024",
    author: "Dr. Rahman",
    readTime: "6 min read",
    views: "2.5k",
  },
  {
    id: 4,
    title:
      "Aching Muscles? Discover How Bath Salts Can Help You Relax and Recover",
    overlayTitle: "Bath Salts for Muscle Recovery",
    excerpt:
      "Learn how different types of bath salts can provide relief for sore muscles and promote faster recovery.",
    image: "/images/blogs/image-11.jpg",
    category: "Recovery",
    date: "March 8, 2024",
    author: "Fitness Expert",
    readTime: "5 min read",
    views: "1.9k",
  },
  {
    id: 5,
    title: "Scrub School: Learn How to Exfoliate Black Skin the Right Way",
    overlayTitle: "Exfoliating Black Skin Guide",
    excerpt:
      "Master the art of proper exfoliation techniques specifically designed for darker skin tones.",
    image: "/images/blogs/image-17.jpg",
    category: "Skincare",
    date: "March 5, 2024",
    author: "Beauty Specialist",
    readTime: "7 min read",
    views: "3.2k",
  },
  {
    id: 6,
    title: "Find Your Perfect Body Scrubs for Every Skin Type and Budget",
    overlayTitle: "Best Body Scrubs for Every Skin Type",
    excerpt:
      "Discover the perfect body scrub for your unique skin type and budget with our comprehensive guide.",
    image: "/images/blogs/image-3-1.jpg",
    category: "Product Guide",
    date: "March 3, 2024",
    author: "Skincare Expert",
    readTime: "8 min read",
    views: "2.7k",
  },
  {
    id: 7,
    title: "Traditional vs Modern Techniques: Choosing Body Massage in Dhaka",
    overlayTitle: "Choosing Body Massage in Dhaka",
    excerpt:
      "Compare traditional and modern massage techniques to find the perfect treatment for your needs in Dhaka.",
    image: "/images/blogs/image-6.jpg",
    category: "Massage Guide",
    date: "March 1, 2024",
    author: "Massage Therapist",
    readTime: "6 min read",
    views: "2.3k",
  },
  {
    id: 8,
    title: "Top 5 Affordable and Luxurious Massage in Dhaka",
    overlayTitle: "Top 5 Affordable and Luxurious Massage in Dhaka",
    excerpt:
      "Discover the best massage centers in Dhaka that offer both affordability and luxury experiences.",
    image: "/images/blogs/image-17.jpg",
    category: "Local Guide",
    date: "February 28, 2024",
    author: "Local Expert",
    readTime: "9 min read",
    views: "4.1k",
  },
  {
    id: 9,
    title: "How to Choose the Best Bath and Shower Oil for Your Skin",
    overlayTitle: "Face and Body Scrub for Sensitive Skin",
    excerpt:
      "Learn how to select the perfect bath and shower oils that nourish and protect your skin type.",
    image: "/images/blogs/image-3-1.jpg",
    category: "Skincare",
    date: "February 25, 2024",
    author: "Dermatologist",
    readTime: "5 min read",
    views: "1.6k",
  },
  {
    id: 10,
    title: "Best Face and Body Scrub for Sensitive Skin: Top Recommendations",
    overlayTitle: "Face and Body Scrub for Sensitive Skin",
    excerpt:
      "Find gentle yet effective scrubs specifically formulated for sensitive skin types.",
    image: "/images/blogs/image-3-1.jpg",
    category: "Sensitive Skin",
    date: "February 22, 2024",
    author: "Skincare Specialist",
    readTime: "6 min read",
    views: "2.0k",
  },
  {
    id: 11,
    title: "Luxury and Affordable Body Scrub Prices in Bangladesh",
    overlayTitle: "Body Scrub Prices in Bangladesh",
    excerpt:
      "Complete guide to body scrub pricing across Bangladesh, from budget-friendly to luxury options.",
    image: "/images/blogs/image-17.jpg",
    category: "Pricing Guide",
    date: "February 20, 2024",
    author: "Market Analyst",
    readTime: "7 min read",
    views: "3.5k",
  },
];

const additionalTopics = [
  "What is the Difference Between Spa and Massage?",
  "Thai Aromatherapy Massage",
  "How to Take Care Of Your Skin in Winter",
  "Spa Services: What Kinds Of Services Are Offered In A Spa Center",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[300px] bg-gradient-to-r from-red-100 via-pink-100 to-amber-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 overflow-hidden transition-colors duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 to-amber-900/10 dark:from-gray-900/30 dark:to-gray-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-red-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-200/30 rounded-full blur-xl"></div>
        </div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <h1 className="text-6xl font-bold mb-4 text-gray-800 bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent dark:text-white">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
              Discover wellness tips, spa insights, and expert advice for your
              journey to relaxation and rejuvenation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Blog Posts Grid */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article key={post.id} variants={fadeInUp}>
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative overflow-hidden h-64 md:h-auto">
                      <Image
                        src={`${post.image}?height=300&width=400&query=${post.image}`}
                        alt={post.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-gray-900/70 dark:via-gray-900/20"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg leading-tight">
                          {post.overlayTitle}
                        </h3>
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500/90 text-white">
                          {post.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className="p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 group-hover:text-red-600 transition-colors dark:text-gray-100 dark:group-hover:text-red-500">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-6 line-clamp-3 dark:text-gray-400">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{post.views}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className="text-xs dark:border-gray-500 dark:text-gray-400"
                          >
                            {post.readTime}
                          </Badge>
                        </div>

                        {/* Read More Button */}
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all duration-300 bg-transparent dark:group-hover:bg-red-500 dark:group-hover:text-white dark:group-hover:border-red-500 dark:border-gray-500 dark:text-gray-300"
                        >
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

          {/* Additional Topics Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-16"
          >
            <Card className="bg-gradient-to-r from-amber-50 to-red-50 border-0 shadow-lg dark:from-gray-800 dark:to-gray-700 dark:border dark:border-gray-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center dark:text-gray-100">
                  More Topics to Explore
                </h3>
                <div className="space-y-4">
                  {additionalTopics.map((topic, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group dark:bg-gray-900 dark:shadow-none dark:hover:shadow-md dark:border dark:border-gray-700"
                    >
                      <span className="text-gray-700 group-hover:text-red-600 transition-colors dark:text-gray-300 dark:group-hover:text-red-500">
                        {topic}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all dark:text-gray-500 dark:group-hover:text-red-500" />
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-red-600 via-pink-600 to-amber-600 text-white relative overflow-hidden dark:from-gray-800 dark:via-gray-700 dark:to-gray-600"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-4xl font-bold">
              Stay Updated with Our Latest Tips
            </h2>
            <p className="text-xl opacity-90">
              Subscribe to our newsletter and never miss our latest wellness
              tips, spa insights, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 dark:bg-gray-700 dark:text-gray-300"
              />
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 shadow-xl dark:bg-gray-900 dark:text-red-500 dark:hover:bg-gray-800">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
