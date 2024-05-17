import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="w-full shadow-2xl pl-10 pr-10" id="contact">
      <div className="justify-center max-w-7xl mx-auto pt-24 pb-24">
        <h1 className="text-emerald-700 text-4xl md:text-7xl font-mono leading-normal hover:text-red-900 transition text-center">
          Contact Us
        </h1>
        <div className="md:flex md:space-x-9">
          <div className="md:w-1/2">
            <h1 className="text-[#131211] text-2xl font-mono leading-normal transition pt-10">
              <p className=" font-bold">Phone: +918840658900</p>
              or mail us at
              <br />
              <p className=" font-bold">adops@appquasar.com</p>
              <p>Building No. : 124</p>
              <p>Kondra</p>
              <p>Iltiffatganj to Khwaja Road</p>
              <p>Bhagawat</p>
              <p>Bharidieh, Ambedkar Nagar</p>
              <p>Uttar Pradesh - 224151</p>
            </h1>
          </div>
          <div className="md:w-1/2 pt-10">
            <div>
              <Card className="bg-zinc-800 border-green-200 border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-green-200">Contact Form</CardTitle>

                  <form
                    action="https://formsubmit.co/d53012b1c4000b449bbc1f93b9a6e331"
                    method="POST"
                    className="space-y-5 pt-5"
                  >
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="bg-transparent text-green-100"
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="bg-transparent text-green-100"
                      required
                    />
                    <Textarea
                      placeholder="Your Message"
                      className="text-green-100 bg-transparent"
                      name="message"
                      required
                    />
                    <Button
                      type="submit"
                      variant={"outline"}
                      className="hover:bg-zinc-800 hover:text-green-100"
                    >
                      Send
                    </Button>
                  </form>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
