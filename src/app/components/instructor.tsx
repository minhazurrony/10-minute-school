import Image from "next/image";
import React from "react";

type Props = {
  data: {
    description: string;
    short_description: string;
    name: string;
    image: string;
  };
};

export const Instructor: React.FC<Props> = ({ data }) => {
  const description = data?.description;
  return (
    <div className="flex gap-4 p-5">
      <Image
        src={data.image}
        height={73}
        width={73}
        alt="instructor-image"
        className="h-[73px] w-[73px] object-contain"
      />
      <div>
        <h2>{data?.name}</h2>
        <div
          className="mb-2 text-gray-400"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
