"use client";
import { Header } from "./component/header";
import { Footer } from "./component/footer";
import { Hero } from "./component/hero";
import { AboutUs } from "./component/aboutUs";
import { Feature } from "./component/feature";
import { Description } from "./component/description";
import { Video } from "./component/video";
import { Form } from "./component/form";
import { Donate } from "./component/donate";

export default function Home() {
  return (
    <>
      <header className="m-0 fixed py-4 z-50 flex justify-between items-center w-full bg-[#2F422E]/[.05] backdrop-blur-sm">
        <Header />
      </header>
      <main>
        <Hero />
        <AboutUs />
        <Feature />
        {/* <Video /> */}
        <Description />
        {/* <Form />
        <Donate /> */}
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
}
