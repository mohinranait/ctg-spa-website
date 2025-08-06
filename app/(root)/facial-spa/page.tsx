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
                  Best Different types of facials
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  A facial spa treatment is a comprehensive skin care regimen
                  for the face, typically performed by a licensed esthetician in
                  a beauty salon or spa. The primary goal is to improve the
                  health and appearance of your skin. While the specific steps
                  and products can vary widely depending on the type of facial
                  and the spa, most treatments follow a general pattern.
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
              Types of Facials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              Deep-Cleansing Facial: Ideal for oily or acne-prone skin, focusing
              on thorough cleansing and extractions to unclog pores. Hydrating
              Facial: Designed to replenish moisture, making it perfect for dry
              or dehydrated skin. Anti-Aging Facial: Aims to reduce the
              appearance of fine lines and wrinkles by using products and
              techniques that boost collagen production and improve skin
              elasticity. Brightening Facial: Uses ingredients to address
              dullness and uneven skin tone, resulting in a more radiant
              complexion. Specialty Facials: These may use advanced technology
              and techniques, such as microdermabrasion (a deep exfoliating
              treatment), chemical peels, or HydraFacials (a patented treatment
              that cleanses, exfoliates, and hydrates).
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default BodyScrubPage;
