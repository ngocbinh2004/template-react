import { Button, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";
import { handleChangeName } from "../../store/reducer/userinformation.reducer";

const arrQueryParams = [
  {
    name: "ram",
    value: "16gb",
  },
  {
    name: "kichthuocmanhinh",
    value: "45inch",
  },
  {
    name: "nhucausudung",
    value: "vanphong",
  },
  {
    name: "cpu",
    value: "i5",
  },
  {
    name: "trangthai",
    value: "conhang",
  },
];
// co 3 cach goi ham
// arrow function, function express sion, function declaration
const HomePage = () => {
  const dispacth = useDispatch;
  const { name, tuoi, gioiTinh } = useSelector(
    (state) => state.userInformationReducer
  );
  console.log(name);

  const locationData = useLocation();
  const navigate = useNavigate();
  console.log(locationData);

  // ram=16gb, kichthuocmanhinh=45inch, nhucausudung=vanphong, cpu=i5, trangthai=conhang
  const [searchParams, setSearchParams] = useSearchParams(
    "?ram=16gb&kichthuocmanhinh=45inch"
  );
  // console.log(searchParams.get("nhucausudung"));
  // console.log(searchParams.get("ram"));

  const nhuCauSuDung = searchParams.get("nhucausudung");

  // useEffect
  useEffect(() => {
    setSearchParams((searchParams) => {
      // searchParams.set("ram", "16gb");
      // searchParams.set("kichthuocmanhinh", "45inch");

      for (let item of arrQueryParams) {
        searchParams.set(item.name, item.value);
      }

      return searchParams;
    });
  }, []);

  return (
    <div>
      <h2>Demo sử dụng useSearchParams</h2>

      <Input
        value={nhuCauSuDung}
        onChange={(e) => {
          setSearchParams((searchParams) => {
            searchParams.set("nhucausudung", e.target.value);
            return searchParams;
          });
        }}
        placeholder="nhập tên gì đó để thay đổi giá trị của nhu cầu sử dụng"
      />
      <Input
        placeholder="Nhap vao thay doi ho ten"
        onChange={(event) => {
          console.log(event.target.value);
          dispacth(handleChangeName("abc"));
        }}
      />

      <Button
        onClick={() => {
          navigate("phu-kien", {
            state: {
              email: "ABC@gmail.com",
              diaChi: "HCM",
            },
          });
        }}
      >
        Bấm vào tôi để đi tới trang phụ kiện
      </Button>
    </div>
  );
};

export default HomePage;
