import React, { useState, useCallback, useContext } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../provider";

import "../assets/styles/components/SearchBar.scss";
import SearchIcon from "../assets/images/icon-search.png";
import { apiClient } from "../services";

export const SearchBar = () => {
  const [timeOutInterval, setTimeOutInterval] = useState();
  const { push } = useHistory();
  const [state, setState] = useContext(AppContext);
  const [searchValue, setSearchValue] = useState("");

  const search = useCallback(
    async (value) => {
      const { data } = await apiClient.Api.searchProducts(value);
      setState({
        items: data.items,
        search: value,
        categories: data.categories,
      });
    },
    [setState]
  );

  const navigateToItemsResult = useCallback(
    async (value) => {
      if (value && value.length > 0) {
        await push({
          pathname: "/items",
          search: `?search=${value}`,
        });
      } else {
        await push({
          pathname: "/",
        });
      }
    },
    [push]
  );

  const handleSearch = useCallback(() => {
    search(searchValue);
    navigateToItemsResult(searchValue);
  }, [navigateToItemsResult, search, searchValue]);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (timeOutInterval) {
      clearTimeout(timeOutInterval);
    }
    const timerIdValue = setTimeout(() => {
      setSearchValue(value);
    }, 500);
    setTimeOutInterval(timerIdValue);
  };

  return (
    <div className="input__container">
      <input
        className="input__search"
        placeholder="Nunca dejes de buscar"
        id="searchInput"
        type="text"
        onChange={handleChange}
        onKeyDown={handleSearch}
      />

      <button href="/" className="button__search" onClick={handleSearch}>
        <img width="16" height="16" src={SearchIcon} alt="search" />
      </button>
    </div>
  );
};
