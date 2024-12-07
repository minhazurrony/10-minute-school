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
import { Play } from "lucide-react";

export const CourseCarousel: React.FC<Pick<CourseCardProps, "media">> = ({
  media,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [playingVideos, setPlayingVideos] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    if (api) {
      setCurrent(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }
  }, [api]);

  const handleVideoPlay = (id: string) => {
    setPlayingVideos((prev) => ({ ...prev, [id]: true }));
  };

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
                  <div className="relative w-full">
                    {playingVideos[media?.id] &&
                    media?.resource_type === "video" ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${media?.resource_value}?autoplay=1`}
                        title={media?.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-48 w-full rounded object-cover"
                      />
                    ) : (
                      <>
                        <Image
                          src={
                            media.resource_type === "video"
                              ? media?.thumbnail_url
                              : media?.resource_value
                          }
                          width={100}
                          height={100}
                          alt=""
                          className="mb-4 h-48 w-full rounded object-cover"
                        />
                        {media?.resource_type === "video" && (
                          <div className="absolute top-0 flex h-full w-full items-center justify-center">
                            <div
                              className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 hover:cursor-pointer"
                              onClick={() => handleVideoPlay(media.id)}
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-500">
                                <Play />
                              </div>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
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
