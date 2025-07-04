import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-amber-800 dark:text-amber-500"
    >
      CTG SPA
    </Link>
  );
};

export default Logo;
