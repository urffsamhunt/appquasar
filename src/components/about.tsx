import React from "react";
import { Inter } from "next/font/google";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="w-full shadow-2xl pl-10 pr-10" id="about">
      <div className="justify-center max-w-7xl mx-auto pt-24 pb-24">
        <h1 className="text-emerald-700 text-7xl font-mono leading-normal hover:text-red-900 transition text-center">
          About Us
        </h1>
        <div className="md:flex md:space-x-9">
          <div className="md:w-1/2">
            <h1 className="text-[#131211] text-xl md:text-2xl font-mono leading-normal transition pt-10">
              AppQuasar is performance based online advertising platform that
              provides simplified and programmatic digital advertising solutions
              to help businesses grow better. <br />
              <br />
              With a team of creative minds and strategic thinkers, we
              specialize in crafting innovative marketing solutions that drive
              results.
            </h1>
          </div>
          <div className="md:w-1/2 pt-10">
            <div>
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200">
                    Live Insights on your Campaign
                  </CardTitle>
                  <CardDescription className="text-zinc-100 text-lg">
                    Get live insights of your marketing Campaign straight from a
                    convenient Dashboard tailored for your needs.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="pt-10">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200">Transparency</CardTitle>
                  <CardDescription className="text-zinc-100 text-lg">
                    We believe in building strong, long-lasting relationships
                    with our clients based on trust and transparency.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
