"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CourseCardProps } from "./course-card";
import Image from "next/image";

export const CourseCarousel: React.FC<Pick<CourseCardProps, "media">> = ({
  media,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Sync the current index and item count with the carousel API
  useEffect(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }
  }, [api]);

  const filteredMedia = media.filter((item) => item.name === "preview_gallery");

  return (
    <div className="relative mx-auto max-w-full">
      {/* Carousel Component */}
      <Carousel setApi={setApi} className="relative w-full">
        <CarouselContent>
          {/* Render carousel items */}
          {filteredMedia.map((media, index) => (
            <CarouselItem key={index}>
              <Card className="w-full">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <Image
                    src={
                      media.resource_type === "video"
                        ? media?.thumbnail_url
                        : media?.resource_value
                    }
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="absolute left-4 rounded-full" />
        <CarouselNext className="absolute right-4 rounded-full" />
      </Carousel>

      {/* Carousel Thumbnail */}
      <div className="flex gap-4 p-4">
        {filteredMedia.map((media, index) => {
          return (
            <Image
              key={index}
              src={
                media.resource_type === "video"
                  ? media?.thumbnail_url
                  : media?.resource_value
              }
              width={50}
              height={50}
              alt=""
              objectFit="cover"
              className={
                current === index + 1
                  ? "rounded-sm outline outline-2 outline-green-500"
                  : ""
              }
            />
          );
        })}
      </div>
    </div>
  );
};
