import { Check } from "lucide-react";
import React from "react";

type Props = {
  pointer: {
    id: string;
    icon: string;
    text: string;
  };
};

export const Pointer: React.FC<Props> = ({ pointer }) => {
  const { text } = pointer;
  return (
    <div className="flex gap-4">
      <div className="text-green-500">
        <Check size={20} />
      </div>

      <h2 className="text-md font-normal">{text}</h2>
    </div>
  );
};
