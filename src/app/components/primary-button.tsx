import { Button } from "@/components/ui/button";
import React from "react";

type PrimaryButtonProps = {
  label: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({ label }) => {
  return (
    <Button className="my-4 w-full border-b-4 border-b-green-700 bg-green-500 p-5 font-bold hover:border-b-transparent hover:bg-green-600">
      {label}
    </Button>
  );
};
