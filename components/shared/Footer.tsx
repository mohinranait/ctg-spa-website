import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 dark:from-gray-900 dark:to-gray-900">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Contact Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold text-amber-400">CTG SPA</div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you want a soothing and relaxing time of your life, call us
              now!!
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
            <Link href="tel:01788453585">
              <Button className="bg-red-500 hover:bg-red-600 text-white mt-6 w-full">
                Call now
              </Button>
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-amber-400">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-500 mt-1" />
                <div>
                  <p>Address: 805 Zakir Hossain Rd, Khulshi, Rd 4000</p>
                  <p>Chattogram</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <p>
                  <Link href={"tel:01788453585"}>01788453585</Link>
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-5 w-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs">@</span>
                </div>
                <Link href={"mailto:info@ctgspa.com"}>info@ctgspa.com</Link>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-amber-400">
                Opening Hours
              </h5>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-4 w-4 text-red-500" />
                <span>Saturday - Friday 10:00 - 22:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-amber-400">
              Quick Link
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-amber-400 transition-colors"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-amber-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-amber-400 transition-colors"
                >
                  Package
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Best Services */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-amber-400">
              Best Service
            </h4>
            <ul className="space-y-3 text-gray-300">
              {[
                {
                  label: "Body Scrub",
                  url: "/body-scrub",
                },
                {
                  label: "Facial Spa",
                  url: "/facial-spa",
                },
                {
                  label: "Oil Bath",
                  url: "/oil-bath",
                },
                {
                  label: "Salt Bath",
                  url: "/salt-bath",
                },
                {
                  label: "Waxing & Threading",
                  url: "/waxing-&-threading",
                },
              ].map((blog, i) => (
                <li key={i}>
                  <Link
                    href={blog?.url}
                    className="hover:text-amber-400 transition-colors"
                  >
                    {blog?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">Copyright ctgspa.com 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
