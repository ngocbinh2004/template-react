// rxslice
// lenh viet nhanh
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ngọc Bình",
  tuoi: "20",
  gioiTinh: "Nam",
};

const userinformationReducer = createSlice({
  name: "user-information",
  initialState, // object literal
  reducers: {
    // quan li action
    handleChangeName: (state, action) => {
      // state ==> du llieu cua initialState
      // action ==> du lieu duoc gui tu component {payload: du lieu duoc gui len }
      // payload
      state.name = action.payload;
    },
  },
});

export const { handleChangeName } = userinformationReducer.actions;

export default userinformationReducer.reducer;

// tạo 1 reducer thứ 2 đặt tên là company reducer
// tên công ty, địa chỉ, ngày thành lập, giám đóc, vốn điều lê
