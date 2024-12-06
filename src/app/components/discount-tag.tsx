import React from "react";

type DiscountTagProps = {
  discountValue: number;
};

export const DiscountTag: React.FC<DiscountTagProps> = ({ discountValue }) => {
  return (
    <div className="relative ml-1 flex items-center rounded bg-orange-600 px-3 py-1 text-sm font-semibold text-white">
      {/* Diamond Shape */}
      <div className="absolute -left-[8px] h-5 w-5 rotate-45 bg-orange-600"></div>
      {/* Bullet Point and Text */}
      <div className="flex items-center">
        <span className="absolute left-0">•</span>
        <span className="z-10">{discountValue} ৳ ছাড়</span>
      </div>
    </div>
  );
};
