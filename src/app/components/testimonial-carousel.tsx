"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type CarouselItem = {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
};

type Props = {
  data: CarouselItem[];
};

export const TestimonialCarousel: React.FC<Props> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);
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

  return (
    <div className="mx-auto max-w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="lg:basis-1/2">
              <Card className="w-full">
                <CardContent className="aspect-[16/9] p-6">
                  <div className="relative">
                    {playingVideos[item.id] ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${item.video_url}?autoplay=1`}
                        title={item.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-48 w-full rounded object-cover"
                      />
                    ) : (
                      <>
                        <Image
                          src={item.thumb}
                          width={100}
                          height={100}
                          alt=""
                          className="mb-4 h-48 w-full rounded object-cover"
                        />
                        <div className="absolute top-0 flex h-full w-full items-center justify-center">
                          <div
                            className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 hover:cursor-pointer"
                            onClick={() => handleVideoPlay(item.id)}
                          >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-500">
                              <Play />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src={item.thumb}
                      width={50}
                      height={50}
                      alt=""
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h2>{item.name}</h2>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Carousel Controls */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black shadow xl:-left-12 xl:p-3" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 text-black shadow xl:-right-12 xl:p-3" />
      </Carousel>
    </div>
  );
};
