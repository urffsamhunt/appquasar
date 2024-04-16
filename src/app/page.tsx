import Image from "next/image";
import Navbar from "@/components/navbar";
import Main from "@/components/main";
import About from "@/components/about";
import Contact from "@/components/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
