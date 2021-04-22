import axios from "axios";
import { transformItems, transformItemDetail } from "./dataTransform";
const ItemsServices = {};
const BaseUrl = "https://api.mercadolibre.com";
const BasePath = "sites/MLA/search";

ItemsServices.GetItems = (params) =>
  new Promise(async (resolve, reject) => {
    try {
      const items = await axios.get(`${BaseUrl}/${BasePath}`, {
        params,
      });
      const transformedData = transformItems(items.data);
      return resolve({ data: transformedData, status: items.status });
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });

ItemsServices.GetItemDetail = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const itemDetail = await axios.get(`${BaseUrl}/items/${id}`);

      if (itemDetail.data.descriptions) {
        const descriptionsfinded = await Promise.all(
          await itemDetail.data.descriptions.map(async (decription) => {
            const { data } = await axios.get(
              `${BaseUrl}/items/${decription.id.split("-")[0]}/description`
            );
            return { ...data, ...decription };
          })
        );
        itemDetail.data.descriptions = descriptionsfinded;
      }
      const transformedItemDetail = transformItemDetail(itemDetail.data);

      return resolve({
        data: transformedItemDetail,
        status: itemDetail.status,
      });
    } catch (error) {
      console.log(error);
      return reject(error);
    }
  });
module.exports = ItemsServices;
