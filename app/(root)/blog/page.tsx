"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    title: " Difference between Spa and message",
    overlayTitle: "Full Body Massage Treatment",
    excerpt:
      "Because the difference between these two has to be determined in a slightly different way. First, let's talk about the message, a very important thing for the human body, after hard work, a little rest is needed. In addition, there are some sensitive places on the human body, where if you massage with soft hands with oily hands with soft touch, you feel pleasure and satisfaction. There are some special features of spa, such as a match maze feeling all over the body, dry skin feels unnecessarily itchy. There, the flower petals are collected from many types of pure ingredients obtained from natural plants to make the oily screen beautiful, and the whole body feels comfortable and relaxed. This is called spa",
    image: "/images/blogs/image-3-1.jpg",
    category: "Hair Spa | The Pros & Cons",
    date: "March 15, 2024",
    author: "Dr. Sarah Ahmed",
    readTime: "5 min read",
    views: "2.1k",
    link: "body-scrub",
  },
  {
    id: 2,
    title: "Therapy & Spa Center in Bangladesh",
    overlayTitle: "Use of Sea Salt for Bath",
    excerpt:
      "Therapy & Spa Center in Bangladesh........... The best and most important Ctgspa.com is a firm believer in the hard pleasure of the service. It is notable in the continuation of the message in the traditional natural way, Thailand, Hong Kong, Singapore, Korea, etc. This message center has been established in more developed countries like Bangladesh. In no way is the skill of Bangladesh less, more modern, more advanced, more trained staff have been established in the service and message center, since all these activities are going on in developed countries, of course it has been established in an updated form. So it has to be said that Ctgspa.com has already taken the responsibility of making the body that is feeling tired and sick from the body back to normal and healthy, as a result of which the weak cells of the whole body from the feet to the head will be raped by the touch of hot oily and soft hands, the blood circulation will be normal, it will feel fresh and healthy. By massaging every part of the body in the form of vibration through hard friction, it will be agitated like the waves of the sea and bring back the body to a comfortable and healthy state.  Generally, Ctgspa.com has taken on a great responsibility to ensure the physical well-being of people. I hope that this massage center can occupy the first place in Bangladesh. Of course, if the customers get international quality service, then they will recognize that this is the first and the best",
    image: "/images/blogs/image-6.jpg",
    category: "Skin Care",
    date: "March 12, 2024",
    author: "Maria Khan",
    readTime: "4 min read",
    views: "1.8k",
    link: "body-scrub",
  },
  {
    id: 3,
    title: "How many types of Spa services are there ?",
    overlayTitle: "Exploring How to Use Epsom Salt Bath",
    excerpt:
      "In fact, its scope is very wide, but it goes without saying that for the information of the customer, Ctgspa.com is a service center that maintains international standards throughout Bangladesh. Since our manpower is more than others, the types of services are of many types, every part of the human body is affected by the decline of a person, in order to live a healthy, normal and beautiful life, it is desirable for every part of the body to be healthy and normal. These are interconnected with each other, if any one of them is damaged, all of them become useless. That is why each part of the body is provided separately like a servicing center. In other words, the types and scope of services are very wide, we only know about two to three services, in fact, its types are of many types, there is no such important part of the body for which there is no service arrangement, a separate Spa is made for each one. If a client thinks that he wants to stay for a long time and do all kinds, they only get the best multi-dimensional service. Because each part of the body is massaged separately with a mixture of many types of oils and time.  It is only possible to truly believe these words if someone has accepted the entire package.",
    image: "/images/blogs/image-10.jpg",
    category: "Wellness",
    date: "March 10, 2024",
    author: "Dr. Rahman",
    readTime: "6 min read",
    views: "2.5k",
    link: "body-scrub",
  },
  {
    id: 4,
    title: "Where is the best spa center in Chittagong ?",
    overlayTitle: "Bath Salts for Muscle Recovery",
    excerpt:
      "***Where is the best spa center in Chittagong...??*** Everyone knows which is the best spa center in Chittagong, only this service center is offering gifts in special places in Chittagong. Ctgspa.com What's app -01788453585 It has been established in places like Khulshi, Agrabad, Nasirabad, AK Khan, Faiz Lake etc. Especially keeping in mind the upper class of Chittagong, Ctgspa.com has been established in a safe and easy location with great care. Massage activities are being conducted by skilled girls from developed countries who are engaged here. With a special consideration, I always try to be the first and always be present. A class collection, the improved environment of the center, foreign fittings, everything has been developed in a combination of improved environment and best service providers. Activities are going on, if every client wants to prove it physically, then proof of trustworthiness will be found through taking the service physically and through body messages. Along with the age of every person, physical fitness and restlessness are increasing, there is a great need for a little relaxation.  Since message centers have been established in Chittagong in line with the developed world, there is an opportunity to get addicted to service here, so you can be worry-free, it is possible to get all kinds of body messages for a relatively small amount of money, because Ctgspa.com has all kinds of facilities at your fingertips. The saying goes that we are trying to provide services by standing by to heal a sick human body. A group of skilled craftsmen are busy working with the hope of strengthening a weak body, and they are determined to answer everything by thinking about the customers.",
    image: "/images/blogs/image-11.jpg",
    category: "Recovery",
    date: "March 8, 2024",
    author: "Fitness Expert",
    readTime: "5 min read",
    views: "1.9k",
    link: "body-scrub",
  },
  {
    id: 5,
    title: "The best Body massages Centre in CHittagong",
    overlayTitle: "Exfoliating Black Skin Guide",
    excerpt:
      "No one wants to be left behind, everyone has a goal, how can they be the first? These people are always trying, just like clients are also roaming around in search of the best service, where they feel comfortable and good environment and 100% safe, the customer's place of residence will be unreliable, there the customer will press. If someone's words are tempted by someone or if there is no place on the road, they don't go anywhere. This is normal. So I have to say with pride that I have started with Ctgspa.com and What's app -01788-453585, this body message centre, which provides the best in Bangladesh, with experienced girls who have maintained international standards and have gained experience through further training. Its environment and the whole of Chittagong have improved by leaving everyone behind. Educated, elegant and conscious citizens of Bangladesh never believe in false assurances, they have seen and understood their whole life based on reality and if they get nourishment from the service, then they will only say The Best Body Massage Centre in Chittagong.  The most important thing in this message center is that every skilled craftsman follows the rules and regulations of the developed world. Due to which clients who have taken body messages abroad do not feel the need to go abroad again to get services. Because now all types of services are available in Chittagong, Bangladesh, not abroad. Don't even think about going abroad, you will find a body massage center in Chittagong, Bangladesh. Every organ of the body of all those smart people is waiting for the friction of the palms of the hands with a mixture of hot oil, when the body cells will become bright. That is why Ctgspa.com is committed. Body Message Center in Chittagong, a place trusted by everyone, is always striving to build a beautiful, healthy and beautiful body.",
    image: "/images/blogs/image-17.jpg",
    category: "Skincare",
    date: "March 5, 2024",
    author: "Beauty Specialist",
    readTime: "7 min read",
    views: "3.2k",
    link: "body-scrub",
  },
  {
    id: 6,
    title: "Where is the spa center Chittagong",
    overlayTitle: "Best Body Scrubs for Every Skin Type",
    excerpt:
      "*Where is the spa center Chittagong**No one wants to be left behind in the competitive market. Ctgspa.com is also at the forefront, the service center has been established by identifying popular areas in the entire city, keeping one thing in mind, this company is moving forward, considering the first-class citizens, it has been built in such a location that this class of people can travel freely. Ctgspa.com has the South Khulshi residential area on its preferred list, the area is very nice, safe, environmentally friendly, very convenient for travel. It is possible to travel easily to any place in the city from this Khulshi because it is the middle point of the city. Not only did we sit with a beautiful and good location, we have arranged for efficient service services, everyone is trained and has obtained a certificate of proficiency in this service work from developed countries. Not only do you have to be skilled in work, you also have to look beautiful, smart, highly educated.  The main objective of this company is to create a good position by leaving everyone behind in customer satisfaction, and it has done so and is continuing its activities to occupy the first place in Bangladesh, surpassing Chittagong. These skilled girls know that the human body experiences tiring pain in various parts of the body. The weather in Kerala and Bangladesh is severely polluted. Here, to keep the human body healthy, beautiful and neat, it is very important to take care of the body. Hot therapy is very effective for humans. The pain is relieved by applying a mixture of garlic, olive oil and boiling water to the painful area and applying very strong pressure on the body. This is just a little bit, I want to ensure the best service by introducing all the rest.",
    image: "/images/blogs/image-3-1.jpg",
    category: "Product Guide",
    date: "March 3, 2024",
    author: "Skincare Expert",
    readTime: "8 min read",
    views: "2.7k",
    link: "body-scrub",
  },
  {
    id: 7,
    title: "Body Scrub",
    overlayTitle: "Choosing Body Massage in chattogram",
    excerpt: "Best Body Scrub in Khulshi Chittagong",
    image: "/images/blogs/image-6.jpg",
    category: "Massage Guide",
    date: "March 1, 2024",
    author: "Massage Therapist",
    readTime: "6 min read",
    views: "2.3k",
    link: "body-scrub",
  },
  {
    id: 8,
    title: "Facial Spa",
    overlayTitle: "Top 5 Affordable and Luxurious Massage in chattogram ",
    excerpt: "High quality Facial Spa Khulshi ",
    image: "/images/blogs/image-17.jpg",
    category: "Local Guide",
    date: "February 28, 2024",
    author: "Local Expert",
    readTime: "9 min read",
    views: "4.1k",
    link: "facial-spa",
  },
  {
    id: 9,
    title: "Oil Bath",
    overlayTitle: "Face and Body Scrub for Sensitive Skin",
    excerpt: "Chitagong Oil Bath",
    image: "/images/blogs/image-3-1.jpg",
    category: "Skincare",
    date: "February 25, 2024",
    author: "Dermatologist",
    readTime: "5 min read",
    views: "1.6k",
    link: "oil-bath",
  },
  {
    id: 10,
    title: "Salt Bath",
    overlayTitle: "Face and Body Scrub for Sensitive Skin",
    excerpt: "Salt Bath service in khulshi",
    image: "/images/blogs/image-3-1.jpg",
    category: "Sensitive Skin",
    date: "February 22, 2024",
    author: "Skincare Specialist",
    readTime: "6 min read",
    views: "2.0k",
    link: "salt-bath",
  },
  {
    id: 11,
    title: "Waxing & Threading",
    overlayTitle: "Body Scrub Prices in Bangladesh",
    excerpt: "Best Waxing & Threading service",
    image: "/images/blogs/image-17.jpg",
    category: "Pricing Guide",
    date: "February 20, 2024",
    author: "Market Analyst",
    readTime: "7 min read",
    views: "3.5k",
    link: "waxing-&-threading",
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
      {/* Blog Posts Grid */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="pb-20 pt-4"
      >
        <div className="container mx-auto max-w-5xl px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article key={post.id} variants={fadeInUp}>
                <Card className="overflow-hidden shadow-none group  transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 dark:border dark:border-gray-700">
                  {/* Content Section */}
                  <CardContent className="p-0 flex flex-col justify-between">
                    {post.image && (
                      <div className="relative overflow-hidden h-64 md:h-auto">
                        <Image
                          src={`${post.image}?height=300&width=400&query=${post.image}`}
                          alt={post.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div>
                      <Link href={`${post?.link}`}>
                        <h2 className="text-2xl font-bold text-gray-800 mb-1 line-clamp-2 group-hover:text-red-600 transition-colors dark:text-gray-100 dark:group-hover:text-red-500">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-gray-600 mb-6 line-clamp-3 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
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
        <div className="container mx-auto max-w-5xl px-4 text-center relative z-10">
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
