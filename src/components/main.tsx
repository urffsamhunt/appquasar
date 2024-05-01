import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Main() {
  return (
    <div className="w-full shadow-xl pl-10 pr-10 pt-52 pb-32">
      <div className="md:flex justify-center max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-[#131211] text-5xl md:text-7xl font-mono leading-normal hover:text-[#1d1d1d] transition">
            Truly
            <br />
            Effective
            <p className="text-emerald-700 hover:text-red-900 transition">
              Marketing
            </p>
          </h1>
          <p className="text-[#131211] text-2xl font-mono leading-normal transition pt-10">
            A Mobile and App Marketing Service that increases visibility,
            maximizes conversions, and ultimately, create advocates for your
            brand.
          </p>
        </div>
        <div className="justify-center md:w-1/2 flex">
          <div className="hidden md:block">
            <Image
              alt="Speaker"
              src={"/assets/vector.png"}
              width="500"
              height="500"
              className="hover:scale-110 transition"
            />
          </div>
        </div>
      </div>
      <div className="pt-20 pb-20 justify-center max-w-7xl mx-auto pl-5 pr-5">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPI</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per Install. Advertiser pays on app installation.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPM</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per thousand Impressions. The advertisers pay for the
                    number of times an ad is shown.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPC</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per click Advertising. The advertiser pays when a click
                    is made on an ad.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPR</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per Registration: Pay per complete registration with
                    the site/App.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPS</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per Sale. Pay per complete sale.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/3">
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200 text-4xl">CPL</CardTitle>
                  <CardDescription className="text-zinc-100 text-xl">
                    Cost per Lead, meaning that the advertiser pays when a lead
                    form is completed and submitted.
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
