import { Button } from "@/components/ui/button";
import React from "react";

type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <Button
      className="w-full border-b-4 border-b-green-700 bg-green-500 p-5 font-bold hover:border-b-transparent hover:bg-green-600"
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
