"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const sliders = [
  { url: "/images/gallary-slider/1.webp" },
  { url: "/images/gallary-slider/2.webp" },
  { url: "/images/gallary-slider/3.png" },
];
const slidersLeft = [
  { url: "/images/gallary-slider/2.webp" },
  { url: "/images/gallary-slider/3.png" },
  { url: "/images/gallary-slider/1.webp" },
];
const slidersRight = [
  { url: "/images/gallary-slider/3.png" },
  { url: "/images/gallary-slider/2.webp" },
  { url: "/images/gallary-slider/1.webp" },
];

const GallarySection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!api) return;
      const nextIndex = (api.selectedScrollSnap() + 1) % sliders.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, sliders.length]);

  return (
    <motion.section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Gallery
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            gallary image
          </p>
        </div>

        <div className="space-y-4">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {sliders.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <Card className="p-0 gap-0">
                    <CardContent className="flex gap-0 p-0 h-[250px] items-center justify-center">
                      <Image
                        src={img.url}
                        alt={`Slider ${index + 1}`}
                        width={600}
                        height={250}
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <GalleryLeft />
            </div>
            <div>
              <GalleryRight />
            </div>
          </div>
          <div className="flex justify-center">
            <Link href={"/gallery"}>
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                See more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const GalleryLeft = () => {
  const sliders = slidersLeft;
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!api) return;
      const nextIndex = (api.selectedScrollSnap() + 1) % sliders.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, sliders.length]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full "
    >
      <CarouselContent>
        {sliders.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 ">
            <div className="p-0">
              <Card className="p-0 gap-0">
                <CardContent className="flex gap-0 p-0 h-[200px] items-center justify-center ">
                  <Image
                    src={`${img.url}`}
                    alt="Slider"
                    width={600}
                    height={250}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const GalleryRight = () => {
  const sliders = slidersRight;
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (!api) return;
      const nextIndex = (api.selectedScrollSnap() + 1) % sliders.length;
      api.scrollTo(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [api, sliders.length]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      className="w-full "
    >
      <CarouselContent>
        {sliders.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 ">
            <div className="p-0">
              <Card className="p-0 gap-0">
                <CardContent className="flex gap-0 p-0 h-[200px] items-center justify-center ">
                  <Image
                    src={`${img.url}`}
                    alt="Slider"
                    width={600}
                    height={250}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default GallarySection;
