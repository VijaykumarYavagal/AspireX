"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Ensure this import is correct
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-18 pb-10">
      {/* ✅ Tailwind Test - Keep this to verify Tailwind is working
      <p className="text-red-500 font-bold text-center">
        If this is red, Tailwind is working
      </p> */}

      <div className="space-y-6 text-center">
        <div className="space-y-6 mx-auto">
          <h4 className="text-2xl font-bold md:text-3xl lg:text-9xl xl:text-7xl gradient-title animate-gradient">
          Level Up Your Career Story  
            <br />
            with AI Precision
          </h4>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Advance your career with personalized guidance, interview prep, and
            AI-powered tools for job success.
          </p>
        </div>

        {/* ✅ Buttons */}
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
          <Button size="lg" className="px-8 pointer-events-auto">
              Get Started
          </Button>
          </Link>
          <Link href="hg" target="_blank" rel="noopener noreferrer">
          <Button asChild size="lg" variant="outline" className="px-8 pointer-events-auto">
          <a>Watch Demo</a>
         </Button>
        </Link>

        </div>
{/* 
        {/* ✅ Test Button - Debug Clickable Issue */}
        {/* <div className="flex justify-center mt-5">
        <button 
  onClick={() => alert("Button Clicked!")} 
  className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold cursor-pointer hover:bg-blue-700 transition duration-200 pointer-events-auto"
>
  Test Button
</button>

        </div>  */}
      </div>

      {/* ✅ Image Section */}
      <div className="hero-image-wrapper mt-5 md:mt-0 pb-9">
        <div ref={imageRef} className="hero-image">
          <Image
            src="/banner3.jpeg"
            width={1270}
            height={1000}
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
