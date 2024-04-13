import MenuBar from "../../components/MenuBar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

export default function DefaultLayout() {
  return (
    <>
      <MenuBar />
      <Outlet />
      <Footer />
    </>
  );
}
