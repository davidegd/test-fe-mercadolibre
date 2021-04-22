import React, { useState, useContext, useEffect, useCallback } from "react";
import { AppContext } from "../provider";
import { apiClient } from "../services";
import { ItemResult } from "../components/ItemResult";
import "../assets/styles/components/ItemResult.scss";
import "../assets/styles/App.scss";
import { Breadcrumb } from "../components/Breadcrumb";
import { PageWrapper } from "../components/PageWrapper";
import { NotFound } from "../components/NotFound";

export const Items = (props) => {
  const [state, setState] = useContext(AppContext);
  const [loadingItems, setLoadingItems] = useState();
  const { items, search } = state;
  const searchItems = useCallback(
    async (value) => {
      setLoadingItems(true);
      const { data } = await apiClient.Api.searchProducts(value);
      setState({
        items: data.items,
        search: value,
        categories: data.categories,
      });
      setLoadingItems(false);
    },
    [setState]
  );

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search).get("search");
    if (urlParam && !search && !items) {
      searchItems(urlParam);
    }
  }, [items, search, searchItems]);
  return (
    <PageWrapper
      title="Items"
      description="Page where search results are displayed"
    >
      {!!items && items.length > 0 ? (
        <>
          <Breadcrumb categories={state.categories} />

          <div className="items__result__container">
            {items.map((item, index) => {
              return (
                <ItemResult
                  key={index + item.id}
                  history={props.history}
                  itemData={item}
                />
              );
            })}
          </div>
        </>
      ) : (
        !loadingItems && !items && <NotFound />
      )}
    </PageWrapper>
  );
};
