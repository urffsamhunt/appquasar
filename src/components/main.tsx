import React from "react";
import Image from "next/image";

export default function Main() {
  return (
    <div className="w-full shadow-xl pl-10 pr-10 pt-52 pb-32">
      <div className="md:flex justify-center max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-[#cbedd4] text-7xl font-mono leading-normal hover:text-[#dcfce4] transition">
            Truly
            <br />
            Effective
            <p className="text-green-300 hover:text-green-100 transition">
              Marketing
            </p>
          </h1>
          <p className="text-[#cbedd4] text-2xl font-mono leading-normal hover:text-[#dcfce4] transition pt-10">
            A Mobile and App Marketing Service that increases visibility,
            maximizes conversions, and ultimately, create advocates for your
            brand.
          </p>
        </div>
        <div className="justify-center md:w-1/2 flex">
          <div className="hidden md:block">
            <Image
              alt="Speaker"
              src={"/assets/vector.svg"}
              width="500"
              height="500"
              className="hover:scale-110 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
