"use client";
import type React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { useState } from "react";
import BookingForm from "@/components/common/booking-form";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const faqData = [
  {
    question: "How often should I use a body scrub?",
    answer:
      "For most skin types, using a body scrub 2-3 times per week is ideal. However, if you have sensitive skin, once a week may be sufficient.",
  },
  {
    question: "Can I use a body scrub on my face?",
    answer:
      "No, body scrubs are typically too harsh for facial skin. We recommend using a gentle facial scrub specifically designed for the delicate skin on your face.",
  },
  {
    question: "Can body scrubs help with cellulite?",
    answer:
      "While body scrubs can improve circulation and skin texture, they cannot eliminate cellulite. However, regular exfoliation can help improve the overall appearance of your skin.",
  },
  {
    question: "Are body scrubs suitable for all skin types?",
    answer:
      "Most people can benefit from body scrubs, but those with very sensitive skin, eczema, or other skin conditions should consult with our specialists before treatment.",
  },
];

const BodyScrubPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    timeDate: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Best Body Scrub Picks Section */}
          <motion.section {...fadeInUp} className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-tight">
                  Facial Spa Best Body Scrub Picks for Luxurious Skin Care
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Indulge in luxurious skincare with our curated selection of
                  the best body scrubs. Our offerings include gentle exfoliants
                  infused with nourishing ingredients like sea salt, sugar, and
                  essential oils. Whether you seek deep hydration, radiant glow,
                  or gentle exfoliation, each scrub is crafted to reveal
                  smoother, revitalized skin. Treat yourself to our invigorating
                  coffee scrubs for a morning boost, or unwind with calming
                  lavender-infused options. Whatever your preference, our body
                  scrubs promise a spa-like experience at home, leaving your
                  skin irresistibly soft and beautifully rejuvenated. Elevate
                  your skincare routine with our best body scrub picks today.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/sliders/3.jpg?height=400&width=500"
                  alt="Luxury Body Scrub Treatment"
                  width={500}
                  height={400}
                  className=""
                />
              </div>
            </div>
          </motion.section>

          {/* Transform Your Skin Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Transform Your Skin with Milk Body Scrubs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Transform your skin with our luxurious Milk Body Scrub, designed
              to exfoliate, nourish, and rejuvenate. This indulgent treatment
              combines the gentle exfoliating power of natural ingredients with
              finely ground almonds to slough away dead skin cells, revealing a
              smoother, more radiant complexion. Rich in vitamins and
              antioxidants, our milk-infused formula deeply hydrates and softens
              the skin, leaving it feeling silky smooth and supple. The creamy
              texture glides effortlessly, while the milk body scrub enhances
              your skin's natural glow, promoting a healthy, youthful
              appearance. Experience the ultimate in pampering and care with our
              Milk Body Scrub, and let your skin shine with renewed vitality.
            </p>
          </motion.section>

          {/* Achieve Radiant Skin Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Achieve Radiant Skin with a Whole Body Scrub
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Revitalize your skin and achieve a radiant glow with our luxurious
              whole body scrub treatment. This exfoliating service gently
              removes dead skin cells, unclogs pores, and stimulates blood
              circulation, leaving your skin feeling smooth, refreshed, and
              rejuvenated. Infused with nourishing ingredients that deeply
              hydrate and soften your skin, while the gentle massage enhances
              relaxation and overall well-being. Ideal for all skin types, a
              whole body scrub is the perfect way to detoxify and renew your
              skin, revealing a brighter, more youthful complexion. Experience
              the ultimate in skin pampering and treat yourself to a whole body
              scrub today.
            </p>
          </motion.section>

          {/* Why Choose Our Body Scrub Service Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Why Choose Our Body Scrub Service?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              At <span className="text-red-500 font-semibold">CTG Spa BD</span>,
              we pride ourselves on delivering exceptional body scrub treatments
              that go beyond exfoliation to rejuvenate and nourish your skin.
              Our expert aestheticians carefully select the finest natural
              ingredients and customize each scrub to suit your skin type and
              preferences. Whether you're looking to achieve smoother skin,
              reduce dryness, or prepare for a special occasion, our body scrubs
              are designed to deliver visible results. Set in a serene and
              luxurious spa environment, each treatment session takes place in
              our tranquil environment is a retreat from daily stresses. With a
              commitment to excellence and a focus on holistic skincare, Ctg Spa
              BD is your destination for luxurious body scrub treatments that
              leave you feeling renewed and radiant. Experience the difference
              today by booking your appointment with us.
            </p>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Frequently Asked Question (FAQ)
            </h2>
            <div className="space-y-4 max-w-4xl">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}>
                    <AccordionItem
                      value={`item-${index}`}
                      className="border-none">
                      <AccordionTrigger className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-200 dark:border-gray-700 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                        <h3 className="text-left font-medium text-gray-800 dark:text-gray-200">
                          {faq.question}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="pt-0 pb-0">
                        <div className="p-4 bg-white dark:bg-gray-900 border-l-4 border-red-500 ml-4 mt-2">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Experience{" "}
              <span className="text-red-500 font-semibold">CTG Spa BD's</span>{" "}
              premium body scrubs, crafted with the finest ingredients for
              radiant, rejuvenated skin in a serene, personalised setting.
              Discover transformative self-care today.
            </p>
          </motion.section>

          {/* Contact Form Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16">
            <div className="max-w-3xl">
              <BookingForm />
            </div>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default BodyScrubPage;
