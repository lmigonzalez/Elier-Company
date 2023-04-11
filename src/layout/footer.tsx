import Link from "next/link";
import { type FC } from "react";

const Footer = () => {
  return (
    <footer className="container flex h-[416px] min-w-full items-center flex-col text-4xl md:h-[335.83px]">
      <div className="flex h-4/5 w-full flex-col  items-start justify-center gap-8 bg-[#7A7DC180] px-20 md:flex-row md:items-center  md:justify-between md:gap-28">
        <p className="text-custom">
          Contact us for the service you want to use
        </p>
        <button className="btn-primary btn w-[166px] text-custom">
          Contact us
        </button>
      </div>
      <div className="px-20 pt-9 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
        <Link className="text-lg normal-case text-custom" href={""}>
          daisyUI
        </Link>
        <div className="flex flex-col gap-4 md:flex-row md:gap-7">
          <Link
            className="link-hover link text-xs normal-case text-[#241F1FB2]"
            href={""}
          >
            Support
          </Link>
          <Link
            className="link-hover link text-xs normal-case text-[#241F1FB2]"
            href={""}
          >
            Privacy Policy
          </Link>
          <Link
            className="link-hover link text-xs  normal-case text-[#241F1FB2]"
            href={""}
          >
            Terms and Conditions
          </Link>
        </div>
        <Link
          className="text-xs normal-case text-[#241F1FB2]"
          href={"/contactus"}
        >
          © 2020 baranditas , All Rights Reserved
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
