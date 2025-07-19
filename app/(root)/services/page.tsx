"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Star } from "lucide-react";
import Image from "next/image";

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

const services = [
  {
    title: "Body Scrub",
    description: "Enjoy A Refreshing Body Scrub",
    image: "/images/about/1.png",
    category: "Body Treatment",
  },
  {
    title: "Facial Spa",
    description: "Nourish Your Face With Our Advanced Facial Spa",
    image: "/images/blogs/image-3-1.jpg",
    category: "Facial Care",
  },
  {
    title: "Oil Bath",
    description: "Calm Your Body With The Most Relaxed Oil Bath",
    image: "/images/blogs/image-6.jpg",
    category: "Bath Treatment",
  },
  {
    title: "Salt Bath",
    description: "Enjoy A Refreshing Salt Bath Therapy",
    image: "/images/blogs/image-11.jpg",
    category: "Bath Treatment",
  },
  {
    title: "Waxing & Threading",
    description: "Clean Your Hair With Our Advanced Waxing",
    image: "/images/blogs/image-6.jpg",
    category: "Beauty Care",
  },
  {
    title: "Body Treatment",
    description: "Enjoy A Refreshing & Luxury Body Massage",
    image: "/images/blogs/image-17.jpg",
    category: "Body Care",
  },
  {
    title: "Hot Stone Massage",
    description: "A Rejuvenating Healing Massage",
    image: "/images/blogs/image-10.jpg",
    category: "Massage Therapy",
  },
  {
    title: "Hot Oil Massage",
    description: "Hot Oil Massage Therapy & Rejuvenating Hot Massage",
    image: "/images/blogs/image-3-1.jpg",
    category: "Massage Therapy",
  },
  {
    title: "Head Massage",
    description: "Hot Oil Massage Therapy & Rejuvenating Head Massage",
    image: "/images/blogs/image-10.jpg",
    category: "Massage Therapy",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-800 dark:text-gray-200 mb-6 leading-tight">
              Where to Find the Best Spa Service in Chattogram
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              We offer a wide range of luxurious spa services designed to relax,
              rejuvenate, and revitalize your body and mind. Nestled in the
              heart of Chattogram , our serene environment provides the perfect
              escape from the hustle and bustle of everyday life.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Spa Services Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Our Spa Services
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group rounded-none p-0 gap-0 transition-all duration-500 border-0 bg-white dark:bg-gray-900 shadow-none overflow-hidden">
                  <div className="relative overflow-hidden">
                    <Image
                      src={`${service?.image}?height=250&width=350&query=${service.title}`}
                      alt={service.title}
                      width={350}
                      height={250}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardContent className="p-0 pt-3 text-center">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 bg-transparent dark:border-red-400 dark:text-red-400 dark:hover:bg-red-400 dark:hover:text-white"
                    >
                      Discover
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Our Services */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-10 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto ">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              At CTG Spa BD, we provide an extensive range of spa services
              designed to pamper, rejuvenate, and invigorate you. Our offerings
              include soothing massages, revitalizing facials, luxurious body
              treatments, and meticulous nail care, all delivered by our team of
              skilled professionals in a tranquil and serene environment.
              Whether you're seeking relief from daily stress, a beauty boost,
              or simply a moment to unwind and revitalize, indulge in the
              ultimate relaxation and wellness journey with our premium spa
              services.
            </p>
          </motion.div>

          <div className="  max-w-4xl mx-auto  pt-4">
            <h3 className="text-2xl border border-[#230303] py-2 px-2   text-center font-bold text-gray-800 dark:text-gray-200 mb-6">
              Escape the Stress: Full Body Massage Services in Chattogram
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Discover the ultimate escape from everyday stress with our
              exceptional full body massage services in Chattogram. Our expert
              therapists are skilled in a variety of massage techniques,
              ensuring a personalized and deeply relaxing experience. Whether
              you're seeking relief from muscle aches, improved circulation, or
              simply a tranquil experience, our full body massages are tailored
              to meet your unique needs. Rejuvenate your mind and body as you
              embark on a journey to total relaxation and well-being with our
              premium spa services.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Daily Work Hours */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 "
      >
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="text-center bg-[#1D7D6B]">
            <h3 className="text-3xl lg:text-5xl py-2 text-white font-bold mb-8">
              Daily Work Hours
            </h3>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="text-center bg-[#FAF5F7] dark:bg-[#111827] py-16"
          >
            <div className="flex items-center justify-center space-x-4">
              <Clock className="h-8 w-8 text-red-400" />
              <div>
                <p className="text-xl text-left text-gray-600 ">
                  Saturday - Friday
                </p>
                <p className="text-2xl font-bold">10:00 AM - 8:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="pb-32">
        <div>
          <div className="max-w-5xl px-4 mx-auto grid md:grid-cols-2 gap-4 bg-gradient-to-r to-[#FAF5F7] py-16 pr-4 from-transparent dark:bg-transparent dark:bg-gradient-to-r dark:to-transparent dark:from-transparent">
            <div className="">
              <div className="space-y-4">
                <div className="">
                  <div className="flex gap-4 items-end  ">
                    <div className="lg:size-[40%] md:-ml-[20%]">
                      <Image
                        src={`/images/contact.png`}
                        width={200}
                        height={200}
                        alt="avater"
                        className="  "
                      />
                    </div>

                    <div className="lg:size-[50%] relative">
                      <span className="w-full bg-bl h-full bg-black/50 text-white absolute top-0 left-0 flex flex-col justify-center pl-10 ">
                        <p className="text-3xl">500</p>
                        <p className="text-lg">Positive Review</p>
                        <div className="flex items-center gap-1">
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                          <Star />
                        </div>
                      </span>
                      <Image
                        src={`/images/png_20230218_145600_0000.png`}
                        width={300}
                        height={300}
                        alt="avater"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="flex  gap-4 ">
                  <div className="sm:size-[40%] relative">
                    <span className="absolute h-full text-white pl-10  left-0 top-0 flex items-center justify-center bg-black/50">
                      Phasellus eu turpis tincidunt
                    </span>
                    <Image
                      src={`/images/download.webp`}
                      width={200}
                      height={200}
                      alt="avater"
                      className=""
                    />
                  </div>
                  <Image
                    src={`/images/20230107_155409_0000-jpg.webp`}
                    width={300}
                    height={300}
                    alt="avater"
                    className="size-[50%]"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-[#526612] py-4 px-3 ">
                <p className="text-4xl text-center text-white">
                  The Love & Affection We Received From Our Clients
                </p>
              </div>
              <div className=" py-4 px-3 ">
                <p className="text-2xl text-black dark:text-white ">
                  "You should try out their pedicure and manicure package. It is
                  very soothing and relaxing. Must Recommended!!!!"
                </p>
              </div>
              <div className="pl-20 mt-10">
                <p className="text-red-600 text-lg">Client A</p>
                <p className="text-gray-700 text-lg dark:text-white">
                  Client from Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
