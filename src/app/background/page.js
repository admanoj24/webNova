"use client";
import React from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-60 md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg p-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-4xl text-3xl text-white font-semibold relative z-20 text-center leading-tight"
        )}
      >
        Transforming Ideas into
      </h1>
      <p className="text-center mt-2 text-neutral-300 text-lg md:text-xl font-light relative z-20 leading-snug">
        Digital Experiences
      </p>
    </div>
  );
}
