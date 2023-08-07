import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Container from "./Container";
import { useAppContext } from "../hooks/useAppContext";

const Layout = () => {

  const { setLanguage } = useAppContext()

  return (
    <div className="bg-black">
      <div>
        <div className="border-b border-grey rounded-b-3xl">
          <Container>
            <Navbar />
          </Container>
        </div>
      </div>
      <div className="flex">
        <div className="p-12 max-w-[520px] w-full border-r border-grey">
          <Sidebar />
        </div>
        <div className="p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
