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
                  Best Hot Oil Massage in khulshi
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                  A hot oil massage is a deeply therapeutic spa treatment that
                  involves the application of warmed, natural oils to the body,
                  combined with various massage techniques. This ancient
                  practice, often rooted in traditions like Ayurveda, aims to
                  provide profound relaxation, nourish the skin, and alleviate
                  muscle tension. What is a Hot Oil Massage? A hot oil massage
                  utilizes heated natural oils (often a blend of carrier oils
                  and essential oils) during a massage session. The warmth of
                  the oil enhances the therapeutic benefits of the massage by
                  promoting deeper muscle relaxation, improving circulation, and
                  allowing for better absorption of the oil's nourishing
                  properties into the skin.
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
              How is a Hot Oil Massage Performed in a Spa?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              A hot oil massage in a spa is a luxurious and calming experience,
              typically performed as follows: Preparation: The session usually
              takes place in a tranquil, private treatment room. The massage
              therapist will likely consult with you to understand your specific
              needs, areas of tension, and any preferences for oil types or
              aromas. The chosen oils are gently warmed to a comfortable and
              safe temperature using a professional warmer. Oil Application: The
              therapist begins by generously applying the warm oil to your body,
              often starting from the neck and shoulders and working downwards.
              The warm oil immediately starts to soothe the skin and muscles.
              Massage Techniques: The therapist then uses a variety of massage
              techniques, which may include long, flowing strokes (effleurage),
              kneading, circular motions, and gentle pressure. The warmth of the
              oil allows for deeper penetration into the muscles, helping to
              release knots and alleviate tension more effectively than a
              standard massage.
            </p>
          </motion.section>
        </div>
      </main>
    </>
  );
};

export default BodyScrubPage;
