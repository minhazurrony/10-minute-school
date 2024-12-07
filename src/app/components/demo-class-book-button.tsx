"use client";
import React from "react";
import { PrimaryButton } from "./primary-button";

type Props = {
  cta: {
    text: string;
    clicked_url: string;
  };
};

export const DemoClassBookButton: React.FC<Props> = ({ cta }) => {
  const handleDemoBook = () => {
    window.open(cta?.clicked_url, "_blank");
  };
  return <PrimaryButton label={cta?.text} onClick={handleDemoBook} />;
};
