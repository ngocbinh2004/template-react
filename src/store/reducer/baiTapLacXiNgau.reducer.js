import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banChon: null,
  tongSoBanChoi: 0,
  tongSoBanChon: 0,
  xiNgau1: 3,
  xiNgau2: 4,
  xiNgau3: 1,
};

const baiTapLacXiNgauReducer = createSlice({
  name: "bai-tap-lac-xi-ngau",
  initialState,
  reducers: {
    handleBanChon: (state, action) => {
      // nếu bấm Tài gửi lên true và nếu bấm Xỉu gửi lên false
      // action.payload
      state.banChon = action.payload;
    },
  },
});

export const { handleBanChon } = baiTapLacXiNgauReducer.actions;

export default baiTapLacXiNgauReducer.reducer;
