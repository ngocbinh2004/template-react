import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "TenCty",
  diaChi: "HCM",
  ngayThanhLap: "12",
  giamDoc: "ABC",
  vonDieuLe: "1",
};

const usercompanyReducer = createSlice({
  name: "user-company",
  initialState,
  reducers: {},
});

export const {} = usercompanyReducer.actions;

export default usercompanyReducer.reducer;
