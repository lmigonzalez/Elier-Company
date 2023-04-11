import Link from "next/link";
import React, { type FC } from "react";

const list: { name: string; link: string }[] = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/services" },
  { name: "Gallery", link: "/gallery" },
  { name: "About Us", link: "/aboutus" },
];

const NavBar: FC = () => {
  return (
    <div className="navbar flex min-w-full items-center justify-between bg-base-100 px-4 pt-10 md:px-20">
      <Link className="btn-primary btn-ghost btn text-xl normal-case" href={""}>
        daisyUI
      </Link>
      <ul className="hidden flex-row justify-around gap-10 md:flex lg:gap-16">
        {list.map((item) => (
          <li key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Link
        className=" btn-ghost btn hidden border border-black md:flex"
        href={"/contactus"}
      >
        Contact Us
      </Link>
      <div className="dropdown md:hidden">
        <button className="btn-ghost btn-square btn ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0001 7H5.00006"
              stroke="#393030"
              strokeWidth="2.01111"
              strokeLinecap="round"
            />
            <path
              d="M19.0001 12H9.00006"
              stroke="#393030"
              strokeWidth="2.01111"
              strokeLinecap="round"
            />
            <path
              d="M19.0001 17H13.0001"
              stroke="#393030"
              strokeWidth="2.01111"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="dropdown-content menu rounded-box menu-compact mt-3 w-52 translate-x-[-100px] bg-base-100 p-2 shadow">
          {list.map((item) => (
            <li key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
