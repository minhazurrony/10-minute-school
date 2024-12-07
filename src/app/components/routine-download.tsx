"use client";
import { FileDown } from "lucide-react";
import React from "react";

type Props = {
  downloadLink: string;
};

export const RoutineDownload: React.FC<Props> = ({ downloadLink }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "Batch_10_Routine.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <p
      className="inline-flex gap-1 text-base font-semibold text-green-500 underline hover:cursor-pointer"
      onClick={handleDownload}
    >
      <FileDown />
      <span>ডাউনলোড রুটিন</span>
    </p>
  );
};
