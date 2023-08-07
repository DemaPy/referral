import { useState } from "react";
import Wallet from "./Wallet";
import Bell from "./Bell";
import SidebarSections from "./SidebarSections";
import SidebarMenu from "./SidebarMenu";
import Separator from "./Separator";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [wallet, setWallet] = useState(
    "0x8143B02dFf9Bad8F180007d9b910AC8c8b4a9c8b"
  );

  return (
    <>
      <div className="mb-12">
        <SidebarMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div className="flex justify-between items-center mb-9">
        <Wallet wallet={wallet} />
        <Bell />
      </div>
      <SidebarSections />
    </>
  );
};

export default Sidebar;
