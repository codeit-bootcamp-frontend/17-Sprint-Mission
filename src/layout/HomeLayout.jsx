import { Outlet } from "react-router-dom";
import HomeHeader from "../components/layout/HomeHeader";
import HomeFooter from "../components/layout/HomeFooter";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <HomeFooter />
    </>
  );
}
