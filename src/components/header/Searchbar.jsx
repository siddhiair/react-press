import React, { useCallback, useState } from "react";
import styles from "../../styles/Searchbar.module.css";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
  }, [isSearchOpen]);

  return (
    <div className="grow">
      {/** Searchbox toggle button for small devices **/}
      <div className="text-right">
        <button
          type="button"
          className="sm:hidden text-primary text-2xl p-1"
          onClick={toggleSearch}
          aria-label={isSearchOpen ? "Close search" : "Open search"}
        >
          {isSearchOpen ? <CgClose /> : <FiSearch />}
        </button>
      </div>

      {/** form with Searchbox **/}
      <form
        className={`relative ${styles.searchForm}  ${
          isSearchOpen === true ? styles.searchFormVisible : ""
        }`}
      >
        <div className="relative">
          <input
            type="search"
            className="bg-white p-2 rounded-sm border sm:border-transparent w-full focus:outline-0 focus:border-primary text-gray-900"
            placeholder="Enter WordPress powered website URL"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search"
          />
          <button
            type="search"
            className="bg-transparent border-0 text-2xl px-4 cursor-pointer flex items-center absolute top-0 right-0 bottom-0 z-20"
          >
            <FiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
