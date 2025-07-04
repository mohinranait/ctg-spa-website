import { Clock, Phone } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type SimplePackageType = {
  id: string;
  title: string;
  price: number | string;
  duration: string;
  popular: boolean;
};
type PropType = {
  pkg: SimplePackageType;
};
const SimplePackage = ({ pkg }: PropType) => {
  return (
    <div key={pkg.id} className="group  relative">
      {/* Popular Badge */}
      {pkg.popular && (
        <div
          className="absolute -top-1 -right-1 z-10 bg-gray-900 text-white px-4 py-2 text-sm font-semibold"
          style={{
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 85%)",
          }}
        >
          Popular
        </div>
      )}

      {/* Main Card */}
      <div
        className="bg-white border border-gray-200 rounded-md  shadow-lg hover:shadow-xl transition-all duration-300 group-hover:translate-y-[-4px] overflow-hidden dark:border-gray-700 dark:bg-gray-900"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)",
        }}
      >
        <div className="p-8">
          {/* Service Title */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight dark:text-white">
              {pkg.title}
            </h3>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{pkg.duration}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <div className="flex relative items-baseline gap-1">
              <span className="text-lg absolute top-0 left-0  font-medium text-gray-700 dark:text-gray-200">
                ৳
              </span>
              <span className="text-4xl pl-4 font-bold text-gray-900 dark:text-white">
                {pkg.price.toLocaleString()}
              </span>
              <span className="text-sm">{pkg.duration}</span>
            </div>
          </div>

          {/* Call Button */}
          <Button
            className="w-full bg-stone-200 hover:bg-stone-300 text-gray-900 font-medium py-3 px-6 transition-all duration-200 border-0 shadow-sm hover:shadow-md"
            style={{
              clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
            }}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimplePackage;
