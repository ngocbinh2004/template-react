import React from "react";
import { Layout, Menu } from "antd";
import Icons from "../../../components/Icons/Icons";
import { CardSim, Laptop, Link } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { PATH_APP } from "../../../routes/path";

const { Header: HeaderAntd } = Layout;
const arrLink = [
  {
    id: 1,
    title: "Điện thoại",
    icon: <Icons.cardSim />,
    path: PATH_APP.homePage,
  },
  {
    id: 2,
    title: "Laptop",
    icon: <Laptop />,
    path: "/chi-tiet-san-pham",
  },
  {
    id: 3,
    title: "Phụ kiện",
    icon: <CardSim />,
    path: "/phu-kien",
  },
  {
    id: 4,
    title: "Smartwatch",
    icon: <CardSim />,
    path: "/smart-watch",
  },
  {
    id: 5,
    title: "Bài tập lắc xí ngầu",
    icon: <null />,
    path: "/bai-tap-lac-xi-ngau",
  },
];

const Header = () => {
  const location = useLocation();
  return (
    <>
      <HeaderAntd
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
          {arrLink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive, isPending }) => {
                  // isActive: true || false
                  // path = "/" ==> isActive = true
                  // path = "/abc" to = "/" ==> isActive = false

                  // điều kiện thứ 2 dành cho các dynamic route
                  // nếu dynamic route có chứa path trùng với navlink cũng sẽ active

                  const activeDynamicRoute = location.pathname.includes(
                    item.path
                  );
                  console.log(activeDynamicRoute);
                  return isActive ? "active" : "";
                }}
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                  padding: "5px 10px",
                  color: "white",
                }}
                to={item.path}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            );
          })}
          <Link
            to="phu-kien"
            state={{
              email: "cgkiet314@gmail.com",
              diaChi: "Q1",
            }}
          >
            Bấm vào tôi để đi tới trang phụ kiện
          </Link>
        </div>
      </HeaderAntd>
    </>
  );
};

export default Header;
