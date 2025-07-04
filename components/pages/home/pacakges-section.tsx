import { Phone, Star, Clock, Sparkles, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function PackagesSection() {
  const packages = [
    {
      id: 1,
      title: "Aromatherapy Massage",
      price: 4000,
      duration: "60 min",
      popular: true,
      gradient: "from-purple-600 via-pink-600 to-rose-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700",
      icon: Sparkles,
      description: "Essential oils & relaxation",
    },
    {
      id: 2,
      title: "Thai Traditional Massage",
      price: 3500,
      duration: "60 min",
      popular: false,
      gradient: "from-emerald-600 via-teal-600 to-cyan-500",
      bgGradient:
        "from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-700",
      icon: Leaf,
      description: "Ancient healing techniques",
    },
    {
      id: 3,
      title: "Swedish Back Massage",
      price: 3500,
      duration: "60 min",
      popular: true,
      gradient: "from-amber-600 via-orange-600 to-red-500",
      bgGradient:
        "from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-700",
      icon: Heart,
      description: "Deep tissue relaxation",
    },
    {
      id: 4,
      title: "Hot Stone Therapy",
      price: 5000,
      duration: "75 min",
      popular: true,
      gradient: "from-slate-600 via-gray-600 to-zinc-500",
      bgGradient:
        "from-slate-50 to-gray-50 dark:from-gray-800 dark:to-gray-700",
      icon: Sparkles,
      description: "Heated stone treatment",
    },
    {
      id: 5,
      title: "Deep Tissue Massage",
      price: 4500,
      duration: "90 min",
      popular: false,
      gradient: "from-indigo-600 via-blue-600 to-cyan-500",
      bgGradient:
        "from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-700",
      icon: Heart,
      description: "Muscle tension relief",
    },
    {
      id: 6,
      title: "Couples Spa Package",
      price: 8000,
      duration: "120 min",
      popular: true,
      gradient: "from-rose-600 via-pink-600 to-fuchsia-500",
      bgGradient: "from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-700",
      icon: Heart,
      description: "Romantic spa experience",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-br from-[#F6ECE5] via-[#F6ECE5] to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Premium Packages
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Experience luxury and relaxation like never before
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Aromatherapy Massage",
              price: "4000",
              duration: "60 min",
              popular: {
                value: true,
                postion: "left",
              },
            },
            {
              title: "Thai Traditional Massage",
              price: "3500",
              duration: "60 min",
            },
            {
              title: "Swedish Back Massage",
              price: "3500",
              duration: "60 min",
              popular: {
                value: true,
                postion: "right",
              },
            },
            {
              title: "Pedicure & Manicure",
              price: "2000",
              duration: "60 min",
              popular: {
                value: true,
                postion: "left",
              },
            },
            {
              title: "Chocolate Scrub",
              price: "3500",
              duration: "60 min",
            },
            {
              title: "Bliss Special Massage",
              price: "3500",
              duration: "60 mins",
              popular: {
                value: true,
                postion: "right",
              },
            },
          ].map((service) => (
            <div className="overflow-hidden relative">
              {service?.popular && service?.popular.postion === "left" && (
                <span className="bg-[#111827] absolute text-center -left-6 top-4 text-xs text-white font-semibold w-[100px] py-[2px] -rotate-45">
                  Popular
                </span>
              )}
              {service?.popular && service?.popular.postion === "right" && (
                <span className="bg-[#111827] absolute text-center top-4 -right-6 text-xs text-white font-semibold w-[100px] py-[2px] rotate-45">
                  Popular
                </span>
              )}

              <div className="py-10 flex flex-col  space-y-6 bg-[#FAF5FA] items-center dark:bg-[#111827]">
                <p className="text-xl font-semibold text-center">
                  {service?.title}
                </p>
                <div className="relative">
                  <span className="text-sm absolute top-0 left-0 ">৳</span>
                  <span className="text-5xl pl-2">{service?.price}</span>
                  <span className="text-sm ">{service?.duration}</span>
                </div>
              </div>
              <div className="py-9 flex justify-center bg-white  dark:bg-[#111827]/80">
                <Button className="rounded-3xl text-xs h-8 bg-[#F6EEE9] hover:bg-[#F6EEE9] text-black  dark:bg-[#111827] dark:text-slate-100">
                  Call Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <motion.div
                variants={fadeInUp}
                key={pkg.id}
                className="group relative"
              >
                {pkg.popular && (
                  <div
                    className={`absolute -top-3 -right-3 z-20 bg-gradient-to-r ${pkg.gradient} text-white px-6 py-2 text-sm font-bold shadow-lg`}
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? "polygon(0 0, 100% 0, 85% 100%, 0 85%)"
                          : "polygon(15% 0, 100% 0, 100% 85%, 0 100%)",
                    }}
                  >
                    Popular
                  </div>
                )}

                <div
                  className={`relative bg-gradient-to-br ${pkg.bgGradient} backdrop-blur-sm border border-white/20 dark:border-gray-600 shadow-2xl hover:shadow-3xl dark:hover:border-gray-500 transition-all duration-500 group-hover:scale-105 overflow-hidden h-96`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div
                      className={`w-full h-full bg-gradient-to-br ${pkg.gradient}`}
                      style={{
                        clipPath:
                          index % 2 === 0
                            ? "circle(50% at 80% 20%)"
                            : "polygon(0 0, 100% 0, 50% 100%)",
                      }}
                    ></div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                    <div
                      className={`w-full h-full bg-gradient-to-tr ${pkg.gradient}`}
                      style={{
                        clipPath:
                          index % 2 === 0
                            ? "polygon(0 100%, 100% 100%, 0 0)"
                            : "circle(60% at 20% 80%)",
                      }}
                    ></div>
                  </div>

                  <div className="relative p-6 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-r ${pkg.gradient} text-white`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {pkg.duration}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="my-3">
                      <div className="flex relative items-baseline gap-1 mb-2">
                        <span className="text-lg absolute top-0 left-0  font-semibold text-gray-700 dark:text-gray-300">
                          ৳
                        </span>
                        <span className="text-4xl pl-4 font-bold text-gray-900 dark:text-white">
                          {pkg.price.toLocaleString()}
                        </span>
                        <span className="text-sm font-medium">
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                        <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
                          (4.9)
                        </span>
                      </div>
                    </div>

                    <div>
                      <Button
                        className={`w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white font-semibold py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0`}
                        style={{
                          clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Book Now
                      </Button>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-20 blur-xl scale-95 -z-10 group-hover:scale-100 transition-transform duration-500`}
                  style={{
                    clipPath:
                      index % 3 === 0
                        ? "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)"
                        : index % 3 === 1
                        ? "polygon(0 0, 90% 0, 100% 15%, 100% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 90%)",
                  }}
                ></div>
              </motion.div>
            );
          })}
        </div> */}
        {/* 
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="group">
            <div
              className="inline-block p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)",
              }}
            >
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Happy Clients</div>
            </div>
          </div>

          <div className="group">
            <div
              className="inline-block p-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(10% 0, 90% 0, 100% 100%, 0 100%)",
              }}
            >
              <div className="text-3xl font-bold">5 Years</div>
              <div className="text-sm opacity-90">Experience</div>
            </div>
          </div>

          <div className="group">
            <div
              className="inline-block p-6 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 90%)",
              }}
            >
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm opacity-90">Rating</div>
            </div>
          </div>
        </div> */}

        {/* <div className="mt-16 text-center">
          <div
            className="inline-block w-80 h-3 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 opacity-30"
            style={{
              clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0 100%)",
            }}
          ></div>
        </div> */}
      </div>
    </motion.div>
  );
}
