import Link from "next/link";
import React, { FC, useEffect } from "react";

const Header: FC = () => {
  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto px-6 py-3">
        <a href="">About me</a>
        <a href="">Creative</a>
        <a href="">Social</a>
      </nav>
    </header>
  );
};

export default Header;
