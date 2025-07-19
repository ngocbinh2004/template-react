import React from "react";
import { useSelector } from "react-redux";

export const ThongTinTroChoi = () => {
  const { banChon } = useSelector((state) => state.baiTapLacXiNgauReducer);
  // boolean
  // let abc = 3 || "3" //
  // let banChon = null; // true hoặc false // truthy va falsy
  // null false ==> false
  // true ==> true
  // cấu trúc viết của toán tử 3 ngôi
  // điều kiện ? hành động 1 : hành động 2
  function isBoolean(data) {
    console.log(data);
    return data === true || data === false; // true || false
  }
  console.log(isBoolean(banChon));

  return (
    <div className="thong-tin-tro-choi">
      <p>Bạn Chọn: {isBoolean(banChon) ? (banChon ? "Tai`" : "Xiu?") : ""}</p>
      <p>Tổng số bàn thắng:</p>
      <p>Tổng số trò chơi:</p>
    </div>
  );
};

export default ThongTinTroChoi;
