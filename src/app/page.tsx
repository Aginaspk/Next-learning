"use client";
import { useAppSelector } from "@/store/hooks";

export default function Home() {
  const { theme } = useAppSelector((state) => state.global);
  return (
    <div
      className={`h-screen ${theme === "light" ? "bg-white" : "bg-slate-900"} pt-[64px]`}
    >    </div>
  );
}
