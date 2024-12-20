"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[25rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold text-center relative z-20 whitespace-nowrap bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
        How can we help you?
      </h1>
      <div className="w-full max-w-[30rem] h-24 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-4 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-12 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(300px_150px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
