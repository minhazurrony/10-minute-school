import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CourseCarousel, CourseChecklist, DiscountTag } from "@app/components";
import { Button } from "@/components/ui/button";
import { formatDate } from "@app/utils/format-date";

export type CourseCardProps = {
  media: any[];
  variantData: any;
  courseChecklist: any[];
  showCarousel?: boolean;
};

export const CourseCard: React.FC<CourseCardProps> = ({
  media,
  variantData,
  courseChecklist,
  showCarousel = true,
}) => {
  const variantInfo = variantData?.data?.items[0];

  const courseEndInfo = variantInfo?.meta.filter(
    (item: any) => item.key === "timer",
  );

  return (
    <Card className="rounded-none">
      <CardHeader className="p-1">
        {showCarousel && <CourseCarousel media={media} />}
      </CardHeader>

      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-semibold">
            ৳{variantInfo?.final_price}
          </h2>

          <h3 className="text-base font-normal line-through md:text-xl">
            ৳{variantInfo?.price}
          </h3>

          <DiscountTag discountValue={variantInfo?.discount_value} />
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

        <div className="mt-8">
          <h4 className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</h4>
          <div className="flex flex-col gap-2">
            {courseChecklist.map((course: any) => {
              return (
                <CourseChecklist
                  key={course?.id}
                  iconUrl={course?.icon}
                  text={course?.text}
                />
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
