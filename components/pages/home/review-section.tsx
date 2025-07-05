"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "They have a team of professional and well-behaved staff who are very friendly and helping at the same time. Enjoyed a quality time here. Recommended from me",
  },
  {
    id: 2,
    text: "	They have a team of professional and well-behaved staff who are very friendly and helping at the same time. Enjoyed a quality time here. Recommended from me",
  },
  {
    id: 3,
    text: "Well-mannered, professional and optimistic team. They are terrific at what they do. I enjoy every moment here. I always come back here for their aromatherapy massage. I like it",
  },
];

export default function ReviewSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
      >
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-8 transition-colors">
              The Love & Affection We Received From Our Clients
            </h2>
            <Carousel
              setApi={setApi}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <div className="relative bg-[#7A3E3E] rounded-lg overflow-hidden">
                <CarouselContent>
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id}>
                      <Card className="border-0 bg-transparent">
                        <CardContent className="flex items-center justify-center p-8 md:p-12 lg:p-16">
                          <blockquote className="text-white text-center text-base   leading-relaxed font-light max-w-3xl">
                            "{testimonial.text}"
                          </blockquote>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Custom Navigation Arrows */}
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white hover:bg-white/10 hover:text-white h-12 w-12" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-transparent border-0 text-white hover:bg-white/10 hover:text-white h-12 w-12" />

                {/* Dot Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === current
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Carousel>
          </motion.div>
        </div>
      </motion.section>
      <div className="w-full max-w-4xl mx-auto"></div>
    </>
  );
}
