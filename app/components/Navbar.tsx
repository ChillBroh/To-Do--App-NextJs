import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  mx-auto p-10 text-center space-x-48">
      <Link
        href={"/taskview"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        View Tasks
      </Link>
      <Link
        href={"/taskview/addtask"}
        className="hover:bg-blue-400 p-4 hover:text-white rounded-2xl"
      >
        Add Task
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
        About uS
      </Link>
    </div>
  );
};

export default Navbar;
