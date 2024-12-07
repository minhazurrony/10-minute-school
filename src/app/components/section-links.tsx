"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Section = {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
};

type SectionLinksProps = {
  sections: Section[];
};

export const SectionLinks: React.FC<SectionLinksProps> = ({ sections }) => {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string | null>(null);

  useEffect(() => {
    // Extract hash from the URL
    const currentHash = window.location.hash.replace("#", ""); // Remove the "#" symbol
    setHash(currentHash);
  }, [searchParams]);

  return (
    <div className="sticky top-[64px] z-50 mx-auto hidden max-w-full bg-white py-4 lg:block">
      <Carousel>
        <CarouselContent className="border-b">
          {sections?.map((section: any, index) => {
            return (
              <CarouselItem key={index} className="basis-auto px-4 text-center">
                <Link
                  href={`#${section?.type}`}
                  className={`block border-b-2 pb-2 text-base font-semibold ${
                    section.type === hash
                      ? "border-green-500 text-green-500"
                      : "border-transparent text-gray-700"
                  }`}
                >
                  {section.name}
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Carousel Controls */}
        <div className="mt-2 flex justify-between">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};
