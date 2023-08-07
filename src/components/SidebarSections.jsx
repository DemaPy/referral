import navigation from "../navigation/sidebar";

import SidebarSection from "./SidebarSection";

const SidebarSections = () => {
  return (
    <div className="flex flex-col gap-6">
      {navigation.map((section) => (
        <SidebarSection isActive={section.id == 3} key={section.id} {...section} />
      ))}
    </div>
  );
};

export default SidebarSections;
