import React from "react";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

export type FlipCardType = {
  id?: string;
  front: {
    image: string;
    title: string;
    subtitle: string;
  };
  back: {
    image: string;
    title: string;
    description: string;
    call: string;
  };
};

type PropType = {
  card: FlipCardType;
};
const FlipCard = ({ card }: PropType) => {
  return (
    <div className="group h-72 w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] shadow-xl overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={card.front.image || "/placeholder.svg"}
              alt={card.front.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-medium opacity-90 mb-1 tracking-wide">
                {card.front.subtitle}
              </p>
              <h3 className="text-2xl font-bold">{card.front.title}</h3>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl overflow-hidden bg-white">
          <div className="relative w-full h-full flex flex-col">
            <img
              src={card.back.image || "/placeholder.svg"}
              alt={card.back.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className=" absolute top-0 left-0 bottom-0 flex-1 p-6 flex flex-col justify-end">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.back.title}
                </h3>
              </div>
              <div className="flex items-center justify-between">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg">
                  <Phone /> Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
