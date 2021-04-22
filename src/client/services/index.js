import axios from "axios";

import { Api } from "./services";
axios.defaults.baseURL = "/api";
class ApiClient {
  Api = new Api(axios);

  buildServices = (url) => {
    axios.defaults.baseURL = url || "/api";

    this.Api = new Api(axios);
  };
}

export const apiClient = new ApiClient();
