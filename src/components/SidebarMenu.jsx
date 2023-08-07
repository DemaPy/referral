import IClose from "../assets/close.svg";
import IOpen from "../assets/open.svg";
import Separator from "./Separator";

const SidebarMenu = ({ isOpen, onClick }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <p className="font-syncopate uppercase text-white text-[28px]">
          My Menu
        </p>
        {isOpen ? (
          <img
            src={IClose}
            alt="close sidebar"
            className="cursor-pointer"
            onClick={onClick}
          />
        ) : (
          <img
            src={IOpen}
            alt="open sidebar"
            className="cursor-pointer"
            onClick={onClick}
          />
        )}
      </div>
      <Separator />
    </>
  );
};

export default SidebarMenu;
