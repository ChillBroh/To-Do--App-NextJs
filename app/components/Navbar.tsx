import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  mx-auto p-10 text-center space-x-48">
      <Link
        href={"/aboutus"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        About Us
      </Link>
      <Link
        href={"/aboutus"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        About us
      </Link>
      <Link
        href={"/aboutus"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        Abour us
      </Link>
      <Link
        href={"/aboutus"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        About uS
      </Link>
    </div>
  );
};

export default Navbar;