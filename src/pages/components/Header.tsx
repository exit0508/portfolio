import Link from "next/link";
import React, { FC, useEffect } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container baseText px-6 py-3 text-lg flex item-center flex-row space-x-4 text-xl  md:text-2xl">
        <a href="">About me</a>
        <a href="">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
