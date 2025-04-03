import React from "react";
import Logo from "./Logo";
import Searchbar from "./Searchbar";
import Link from "../buttons";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-orange-100 py-2">
      <div className="container">
        <div className="flex gap-x-4 md:gap-x-8 items-center justify-between px-4">
          <Logo />
          <Searchbar />
          <Link
            variant="primary"
            label={"Github"}
            url="/"
            icon={<FaGithub />}
          />
        </div>
      </div>
    </header>
  );
};
export default Header;
