import Image from "next/image";
import React from "react";

type HeroChecklistProps = {
  iconUrl: string;
  content: string;
};

export const HeroChecklist: React.FC<HeroChecklistProps> = ({
  iconUrl,
  content,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={iconUrl} height={25} width={25} alt="" />
      <p className="flex-1 text-base text-white md:text-lg">{content}</p>
    </div>
  );
};
