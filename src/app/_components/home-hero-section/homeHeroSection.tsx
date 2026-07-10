import React from "react";
import { Button } from "../button";
import Image from "next/image";
import { IconArrowLeftFill } from "../icons";

export const HomeHeroSection: React.FC = () => {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
        <div className="max-w-7xl mx-auto flex flex-col-reverse items-center xl:flex-row">
          <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl xl:text-2xl dark:text-info">
              خوش اومدی به...
            </h3>
            <h1 className="text-3xl lg:text-5xl xl:text-5xl gradient font-black">
              مسیر صعود به قله برنامه نویسی
            </h1>
            <p className="text-lg font-bold leading-8">
              هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
              کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
              هواتو داریم.
            </p>
            <div className="mt-5 flex gap-5 justify-center xl:justify-start">
              <Button variant="primary" size="large">
                دوره های ری اکت و نکست
                <IconArrowLeftFill fill="currentColor"/>
              </Button>
              <Button variant="neutral" size="large">
                مشاوره برنامه نویسی
              </Button>
            </div>
            <Image
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
              src="/images/frameworks.png"
              alt=""
              width={412}
              height={39}
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            alt="کلاسبن"
            width={702}
            height={521}
          />
        </div>
      </section>
    </>
  );
};
