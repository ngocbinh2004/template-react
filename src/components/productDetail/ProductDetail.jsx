import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetail = () => {
  const { name, diaChi, giamDoc, ngayThanhLap, vonDieuLe } = useSelector(
    (state) => state.usercompanyReducer
  );
  console.log(name);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
