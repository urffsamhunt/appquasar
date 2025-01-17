"use client";
import { Button } from "./ui/button";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className=" shadow-md shadow-black bg-[#000000e5] fixed top-0 w-full z-10 backdrop-blur-md pr-5 pl-5 md:pl-10 md:pr-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 md:space-x-3 items-center">
            <div className="pt-2 pb-2 md:pt-3 md:pb-3">
              <a href="/">
                <Image
                  src={"/assets/logo.svg"}
                  alt="Logo"
                  width="32"
                  height="32"
                ></Image>
              </a>
            </div>
            <div className="items-center">
              <span className="font-sans font-semibold text-xl md:text-2xl text-green-200">
                AppQuasar
              </span>
            </div>
          </div>
          <div className=" space-x-7">
            <button>
              <a
                onClick={scrollAbout}
                className="button font-sans text-xl font-semibold text-green-200 hover:text-green-100 hover:scale-110 overflow-hidden whitespace-nowrap"
              >
                About
              </a>
            </button>
            <button>
              <a
                onClick={scrollContact}
                className="font-sans text-xl font-semibold text-green-200 hover:text-green-100"
              >
                Contact
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function scrollAbout() {
  let about = document.getElementById("about");
  about?.scrollIntoView();
}

function scrollContact() {
  let about = document.getElementById("contact");
  about?.scrollIntoView();
}
