import axios from "axios";

export class Api {
  searchProducts(search) {
    return axios.get(`/items?q=${search}&limit=4`);
  }

  getProductDetail(id) {
    return axios.get(`/items/${id}`);
  }
}
