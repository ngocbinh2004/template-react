import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleBanChon } from "../../../store/reducer/baiTapLacXiNgau.reducer";

const LuaChon = () => {
  const dispatch = useDispatch();
  const { xiNgau1, xiNgau2, xiNgau3 } = useSelector(
    (state) => state.baiTapLacXiNgauReducer
  );
  // let xiNgau1 = 3;
  // let noiDung = "tôi là xí ngầu";
  // tôi là xí ngầu
  // let ketQua = noiDung + " " + xiNgau1
  // string template
  // let ketQua = `${noiDung} ${xiNgau1}` // tôi là xí ngầu 3

  return (
    <div className="luachon">
      <button
        onClick={() => {
          dispatch(handleBanChon(true));
        }}
        className="btn-luachon"
      >
        Tai`
      </button>
      <div>
        <img src={`./${xiNgau1}.png`} alt="" />
        <img src={`./${xiNgau2}.png`} alt="" />
        <img src={`./${xiNgau3}.png`} alt="" />
      </div>
      <button
        onClick={() => {
          dispatch(handleBanChon(false));
        }}
        className="btn-luachon"
      >
        Xiu?
      </button>
    </div>
  );
};

export default LuaChon;
