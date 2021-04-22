const author = {
  name: "David Enrique",
  lastname: "Gomez Dellepere",
};

export const transformItems = (values) => {
  if (!values) {
    return {};
  }
  const { filters, available_filters, results } = values;
  const existsFilter = filters.length === 0;
  const activeFilter = existsFilter ? available_filters : filters;

  const categoriesFilter = activeFilter.find(
    (itemFilter) => itemFilter.id === "category"
  );
  let itemCategories;
  if (existsFilter) {
    itemCategories = categoriesFilter.values
      .map((itemCategory) => itemCategory.name)
      .slice(0, 2);
  } else {
    itemCategories = categoriesFilter.values[0].path_from_root.map(
      (itemCategory) => itemCategory.name
    );
  }
  const items = results.map((itemResult) => {
    const { item } = transformItemDetail(itemResult);
    delete item.description;
    delete item.sold_quantity;
    return item;
  });
  return {
    author,
    categories: itemCategories || [],
    items,
  };
};

export const transformItemDetail = (itemData) => {
  if (!itemData) {
    return {};
  }
  const {
    id,
    condition,
    currency_id,
    descriptions,
    price,
    pictures,
    shipping,
    sold_quantity,
    title,
    thumbnail,
  } = itemData;

  return {
    author,
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
        decimals: 0.0,
      },
      picture: (pictures && pictures[0].url) || thumbnail,
      condition,
      free_shipping: shipping && !!shipping.free_shipping,
      sold_quantity,
      description: descriptions ? descriptions[0].plain_text : "",
    },
  };
};
