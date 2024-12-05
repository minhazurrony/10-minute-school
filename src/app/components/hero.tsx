import Image from "next/image";
import React from "react";
import { HeroChecklist, CountdownTimer } from "@/components";

type HeroProps = {
  liveBatchData: any;
  variantsData: any;
};

type VariantsChecklist = {
  id: string;
  icon: string;
  meta_value: string;
};

export const Hero: React.FC<HeroProps> = ({ liveBatchData, variantsData }) => {
  const backgroundUrl =
    liveBatchData?.data?.sections[0]?.values[0]?.background?.image;
  const title = liveBatchData?.data?.title;
  const description = liveBatchData?.data?.description;
  const media = liveBatchData?.data?.media;

  const variantsChecklist = variantsData?.data?.items[0]?.meta[0]?.values;
  const lastDateOf10thBatchEnrollment =
    variantsData?.data?.items[0]?.meta[1]?.values[0]?.end_at;

  const enrollmentNotice =
    variantsData?.data?.items[0]?.meta[1]?.values[0]?.text;

  return (
    <div
      className="flex min-h-[60vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <div className="container px-4 py-10">
        <div className="order-1 flex flex-1 flex-col justify-center gap-4 md:order-1 md:max-w-[calc(100%-348px)] lg:max-w-[calc(100%-448px)]">
          <Image
            src={media[0].resource_value}
            width={105}
            height={40}
            alt="live-image"
            className="mb-2"
          />
          <h1 className="mb-2 text-[21px] font-semibold text-white md:text-4xl">
            {title}
          </h1>
          <div
            className="mb-2 text-gray-400"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
            {variantsChecklist?.map((list: VariantsChecklist) => {
              return (
                <HeroChecklist
                  key={list.id}
                  iconUrl={list.icon}
                  content={list.meta_value}
                />
              );
            })}
          </div>

          <div>
            <p className="mb-4 text-gray-400">{enrollmentNotice}</p>
            <CountdownTimer endAt={lastDateOf10thBatchEnrollment} />
          </div>
        </div>
      </div>
    </div>
  );
};