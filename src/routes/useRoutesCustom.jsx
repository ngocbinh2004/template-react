import { Routes, Route, useRoutes } from "react-router-dom";
import { PATH_APP } from "./path";
import HomePage from "../pages/homePage/HomePage";
import UserTemplate from "../templates/userTemplate/UserTemplate";
import NotFound from "../components/NotFound/NotFound";

import ProductDetail from "../components/productDetail/ProductDetail";
import BaiTapLacXiNgau from "../pages/baiTapLacXiNgau/BaiTapLacXiNgau";

const useRoutesCustom = () => {
  const routes = useRoutes([
    {
      path: PATH_APP.homePage,
      element: <UserTemplate />,
      children: [
        { index: true, element: <HomePage /> },
        { path: PATH_APP.productDetail, element: <ProductDetail /> },
        {
          path: PATH_APP.baiTapLacXiNgau,
          element: <BaiTapLacXiNgau />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return routes;
};

export default useRoutesCustom;
