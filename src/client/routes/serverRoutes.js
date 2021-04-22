import { Home } from "../pages/Home";
import { ItemDetail } from "../pages/ItemDetail";
import { Items } from "../pages/Items";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
  },
  {
    exact: true,
    path: "/items",
    component: Items,
  },
  {
    exact: true,
    path: "/items/:id",
    component: ItemDetail,
  },
];

export default routes;
