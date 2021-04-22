import { apiClient } from "./index";

export const searchItems =
  (async (value, setState) => {
    const { data } = await apiClient.Api.searchProducts(value);
    console.log(data);
    setState({ items: data.items, search: value });
  },
  []);
