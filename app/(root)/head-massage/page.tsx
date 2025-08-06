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
                  Best Head massage in chittagong
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  It combines various massage techniques with the potential use
                  of nourishing oils to relieve tension, improve circulation,
                  and promote overall well-being and hair health. What is a Head
                  Massage? A head massage is a specialized form of massage that
                  concentrates on the head, scalp, neck, and upper shoulders. It
                  can be performed with or without oils, though warm oil is
                  frequently used to enhance the therapeutic effects and provide
                  additional nourishment to the hair and scalp. The techniques
                  typically involve gentle to firm pressure, kneading, tapping,
                  and circular motions
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
              How is a Head Massage Performed in a Spa?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              In a spa setting, a head massage is designed to be a deeply
              relaxing and rejuvenating experience: The therapist will ask about
              your specific concerns, such as tension areas, scalp conditions
              (e.g., dryness, oiliness, dandruff), or hair health goals. This
              helps them tailor the treatment and select appropriate oils. Oil
              Application (Optional): If chosen, a warm, natural oil (e.g.,
              coconut, almond, jojoba, or a blend with essential oils) is gently
              applied to your scalp and hair. The warmth of the oil helps it
              penetrate deeper and adds to the relaxation. Massage Techniques:
              The therapist uses their fingertips, palms, and sometimes forearms
              to perform a variety of massage techniques.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default BodyScrubPage;
