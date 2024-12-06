import Image from "next/image";
import React from "react";

type CourseChecklistProps = {
  iconUrl: string;
  text: string;
};

export const CourseChecklist: React.FC<CourseChecklistProps> = ({
  iconUrl,
  text,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Image src={iconUrl} height={20} width={20} alt="" />
      <p className="flex-1 text-sm font-medium md:text-base">{text}</p>
    </div>
  );
};
