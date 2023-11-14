import Link from "next/link";
import React from "react";
import { Signin, Signout } from "./user-btn";
function Navbar() {
  return (
    <nav className="flex">
      <Link
        className="text-center p-4 text-xl hover:bg-white hover:text-black block w-full"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="text-center p-4 text-xl hover:bg-white hover:text-black block w-full"
        href={"/dashboard"}
      >
        Dashboard
      </Link>
      <Link
        className="text-center p-4 text-xl hover:bg-white hover:text-black block w-full"
        href={"/vips"}
      >
        VIPs
      </Link>
      <Link
        className="text-center p-4 text-xl hover:bg-white hover:text-black block w-full"
        href={"/signin"}
      >
        Custom Sign In
      </Link>
      <Link
        className="text-center p-4 text-xl hover:bg-white hover:text-black block w-full"
        href={"/protected"}
      >
        Protected
      </Link>
      <Signin proName="GitHub" proId="github" />
      <Signout />
    </nav>
  );
}

export default Navbar;
