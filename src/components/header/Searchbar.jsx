import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/Searchbar.module.css";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import useFetch from "../../hooks/useFetch";
import { useAppContext } from "../../hooks/useAppContext";

const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const { setPosts, setLoading, setError } = useAppContext();

  const { data, error } = useFetch(apiUrl);

  const toggleSearch = useCallback(() => {
    setIsSearchOpen(!isSearchOpen);
  }, [isSearchOpen]);

  const getHostName = (inputUrl) => {
    try {
      const url = new URL(inputUrl); // Parse the input URL
      return `${url.protocol}//${url.hostname}`; // Extract the root domain (protocol + hostname)
    } catch (error) {
      console.error("Invalid URL:", error);
      return null;
    }
  };

  useEffect(() => {
    if (data) {
      setPosts(data);
      setLoading(false);
    }
  }, [data, setPosts, setLoading]);

  useEffect(() => {
    if (error) {
      setError(error);
      setLoading(false);
    }
  }, [error, setError, setLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUrl) return;

    const formattedUrl = `${getHostName(inputUrl)}/wp-json/wp/v2/posts`;
    setApiUrl(formattedUrl);
    setLoading(true);
  };

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
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="search"
            className="bg-white p-2 rounded-sm border sm:border-transparent w-full focus:outline-0 focus:border-primary text-gray-900"
            placeholder="Enter WordPress powered website URL"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
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
