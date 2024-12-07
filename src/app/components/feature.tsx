import Image from "next/image";
import React from "react";

type Props = {
  feature: {
    id: string;
    icon: string;
    title: string;
    subtitle: string;
  };
};

export const Feature: React.FC<Props> = ({ feature }) => {
  const { icon, title, subtitle } = feature;
  return (
    <div className="flex items-start gap-4">
      <Image
        src={icon}
        width={36}
        height={36}
        alt="feature-icon"
        className="h-9 w-9 object-cover"
      />
      <div>
        <h2 className="text-lg font-medium leading-[26px] text-white">
          {title}
        </h2>
        <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
