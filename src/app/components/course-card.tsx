import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CourseCarousel } from "@app/components";
import { Button } from "@/components/ui/button";
import { formatDate } from "@app/utils/format-date";

export type CourseCardProps = {
  media: any[];
  variantData: any;
};

export const CourseCard: React.FC<CourseCardProps> = ({
  media,
  variantData,
}) => {
  const variantInfo = variantData?.data?.items[0];

  const courseEndInfo = variantInfo?.meta.filter(
    (item: any) => item.key === "timer",
  );

  return (
    <Card>
      <CardHeader className="p-1">
        <CourseCarousel media={media} />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold">
            ৳{variantInfo?.final_price}
          </h2>

          <h3 className="text-base font-normal line-through md:text-xl">
            ৳{variantInfo?.price}
          </h3>

          <div className="relative ml-1 flex items-center rounded bg-orange-600 px-3 py-1 text-sm font-semibold text-white">
            {/* Diamond Shape */}
            <div className="absolute -left-[8px] h-5 w-5 rotate-45 bg-orange-600"></div>
            {/* Bullet Point and Text */}
            <div className="flex items-center">
              <span className="absolute left-0">•</span>
              <span className="z-10">1500 ৳ ছাড়</span>
            </div>
          </div>
        </div>
        <h3 className="text-xs font-normal text-gray-500 md:text-base">
          {variantInfo?.name}
        </h3>

        <Button className="my-4 w-full border-b-4 border-b-green-700 bg-green-500 p-5 font-bold hover:border-b-transparent hover:bg-green-600">
          Enroll
        </Button>

        <p className="text-base text-orange-500">
          {`${courseEndInfo[0]?.values[0]?.text} ${formatDate(courseEndInfo[0]?.values[0]?.end_at)}`}
        </p>
      </CardContent>
    </Card>
  );
};
