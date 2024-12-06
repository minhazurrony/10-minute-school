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

const itemsPerView = 5;

export const SectionLinks: React.FC<SectionLinksProps> = ({ sections }) => {
  const [startIndex, setStartIndex] = useState(0);
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string | null>(null);

  const handleNext = () => {
    if (startIndex + itemsPerView < sections.length) {
      setStartIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    // Extract hash from the URL
    const currentHash = window.location.hash.replace("#", ""); // Remove the "#" symbol
    setHash(currentHash);
  }, [searchParams]);

  return (
    <div className="relative mx-auto max-w-full">
      <Carousel>
        <CarouselContent className="flex border-b">
          {sections
            .slice(startIndex, startIndex + itemsPerView)
            .map((section, index) => (
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
            ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <div className="mt-2 flex justify-between">
          <CarouselPrevious
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className={`${
              startIndex === 0 ? "cursor-not-allowed opacity-50" : ""
            }`}
          />
          <CarouselNext
            onClick={handleNext}
            disabled={startIndex + itemsPerView >= sections.length}
            className={`${
              startIndex + itemsPerView >= sections.length
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          />
        </div>
      </Carousel>
    </div>
  );
};
