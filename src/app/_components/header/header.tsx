import React from "react";
import { TopNavigation } from "./top-navigation";
import Image from "next/image";

export const Header: React.FC = () => {
  return (
    <header className="border-b dark:border-base-content/5">
      <div className="container lg:mx-auto lg:max-w-7xl flex items-center justify-between">
        <Image
          src="/images/logo-light.svg"
          alt="کلاسبن"
          width={100}
          height={36}
        />
        <TopNavigation/>
        <span className="mr-auto">auth</span>
      </div>
    </header>
  );
};
