import { configureStore } from "@reduxjs/toolkit";
import userInformationReducer from "./reducer/userinformation.reducer";
import usercompanyReducer from "./reducer/usercompany.reducer";
//userInformationReducer lay cua thang userInformationReducer vi ko nam trong ngoac

export default configureStore({
  reducer: {
    hoTen: () => {
      return "Ngọc Bình";
    },
    userInformationReducer,

    usercompanyReducer,
  },
});
