"use clinet";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { toast } from "sonner";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData?.name?.trim() ||
      !formData?.phone?.trim() ||
      !formData?.message?.trim()
    ) {
      toast.warning("Please! give me valid data");
      return;
    }
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        // alert("Appointment email sent successfully!");
        toast.success("Appointment email sent successfully!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        alert("Failed to send appointment. Try again later.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow border-0 dark:border dark:border-gray-700 overflow-hidden">
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name ..."
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                required
              />
            </div>
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number ..."
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <Textarea
              name="message"
              placeholder="Your message ..."
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="">
            <Button
              type="button"
              onClick={handleSubmit}
              className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white px-12 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book Appointment Now
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
