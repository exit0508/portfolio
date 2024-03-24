import Link from "next/link";
import React, { FC, useEffect } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container px-6 py-3 text-l flex flex-row space-x-4">
        <a href="">About me</a>
        <a href="">Projects</a>
      </nav>
    </header>
  );
};

export default Header;
