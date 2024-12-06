"use client";
import { CONTACT_NUMBER } from "@app/constants";
import { Phone } from "lucide-react";

export const MakeCall = () => {
  const makeCall = () => {
    window.location.href = `tel:${CONTACT_NUMBER}`;
  };
  return (
    <p
      className="ml-2 flex cursor-pointer items-center justify-center font-medium text-green-500 underline"
      onClick={makeCall}
    >
      <Phone size={14} />
      <span className="ml-1">ফোন করুন ({`${CONTACT_NUMBER}`})</span>
    </p>
  );
};
