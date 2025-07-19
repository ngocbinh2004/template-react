import React from "react";
import LuaChon from "./children/LuaChon";
import ThongTinTroChoi from "./children/ThongTinTroChoi";
import "./style.css";

export const BaiTapLacXiNgau = () => {
  return (
    <div className="bai-tap-xi-ngau">
      <h1>Game đổ xúc xắc</h1>
      <LuaChon />
      <ThongTinTroChoi />
      <button>Play Game</button>
    </div>
  );
};

export default BaiTapLacXiNgau;
