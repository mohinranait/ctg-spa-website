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
                  Best Body Scrub Picks for Luxurious Skin Care
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  Body scrubs are a popular skincare product that help remove
                  dead skin cells, leaving the skin smooth, refreshed, and
                  radiant. Body scrubs are considered an important service at
                  spas because they deeply nourish the skin and soothe the mind.
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
              A body scrub is a special paste made of small particles (such as
              salt, sugar, coffee) and oil or moisturizer. When it is gently
              rubbed on the skin, it removes dead skin cells and dirt
              accumulated on the upper layer of the skin. Its main benefits are:
              Exfoliates the skin: It helps remove dead skin cells and produce
              new cells, which makes the skin look vibrant. Smoothes and softens
              the skin: Regular use of a body scrub smoothes and softens rough
              areas like elbows, knees, and ankles. Increases blood circulation:
              Gentle massage while scrubbing helps increase blood circulation to
              the skin. Prevents ingrown hairs: It is effective in reducing the
              problem of in-grown hairs. Increases the effectiveness of
              moisturizers: After scrubbing, the skin remains clean and soft, so
              that lotions or moisturizers are absorbed well. Correct method of
              using body scrub Some steps should be followed to use a body scrub
              at home or at a spa: 1. Prepare the skin: First, take a bath with
              warm water. This opens the pores of the skin and makes scrubbing
              easier.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default BodyScrubPage;
