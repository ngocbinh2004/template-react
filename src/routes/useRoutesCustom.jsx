import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import ProductDetail from "../pages/productDetail/ProductDetail";
import UserTemplate from "../templates/userTamplate/UserTemplate";
import { PATH_APP } from "./path";
const useRoutesCustom = () => {
  // trang chu - chi tiet san pham

  const routes = useRoutes([
    {
      path: PATH_APP.homePage,
      element: <UserTemplate />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: PATH_APP.ProductDetail,
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return routes;
};

export default useRoutesCustom;
