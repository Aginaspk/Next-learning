"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { SliderToggle } from "../ui/slider";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";

type ToggleOptionsType = "light" | "dark";

export const Navbar = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("light");
  const { theme } = useAppSelector((state) => state.global);

  return (
    <nav
      className={`flex fixed w-full  `}
    >
      <div className="xl:h-[64px] xl:w-[1400px] flex items-center xl:px-[60px] justify-between">
        <div className="flex">
          <div className="flex gap-1 mr-[20px] items-center">
            <img
              className={"h-[20px] dark:invert"}
              src="/next.svg"
              alt="next.svg"
            />
          </div>
          <div className="flex items-center">
            <h3 className="text-[14px] ml-[20px] text-[#888888] hover:text-white cursor-pointer">
              Showcase
            </h3>
            <Link href={'/docs/news'}><h3 className="text-[14px] ml-[20px] text-[#888888] hover:text-white cursor-pointer">
              Docs
            </h3></Link>
            <h3 className="text-[14px] ml-[20px] text-[#888888] hover:text-white cursor-pointer">
              Blog
            </h3>
            <h3 className="text-[14px] ml-[20px] text-[#888888] hover:text-white cursor-pointer">
              Templates
            </h3>
            <h3 className="text-[14px] ml-[20px] text-[#888888] hover:text-white cursor-pointer">
              Enterprises
            </h3>
          </div>
        </div>
        <div className="flex">
          <Button variant={theme === "light" ? "default" : "secondary"} size={"sm"}>Sign up</Button>
          <div className={`grid place-content-center px-4 transition-colors`}>
            <SliderToggle selected={selected} setSelected={setSelected} />
          </div>
        </div>
      </div>
    </nav>
  );
};
