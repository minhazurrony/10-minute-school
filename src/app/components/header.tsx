import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-10 flex min-h-16 items-center justify-between border-b bg-white">
      <div className="m-auto flex w-full max-w-[1440px] items-center justify-between px-4 py-3 md:px-7">
        <Link href={"/"}>
          <Image
            src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
            height={27}
            width={100}
            alt="10-min-school-logo"
          />
        </Link>

        {/* TODO: add localization switch button */}
      </div>
    </nav>
  );
};
