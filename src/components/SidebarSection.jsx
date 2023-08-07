import { useLocation } from "react-router-dom"
import SidebarItem from "./SidebarItem"
import Separator from "./Separator"









const SidebarSection = ({ isActive, section, navigation }) => {
    const {pathname} = useLocation()


    return (
        <div>
            <div className="text-dark_grey text-lg uppercase mb-4">{section}</div>
            <div className="flex flex-col gap-4 mb-6">
            {
                navigation.map(Item => <SidebarItem isActive={pathname === "/"+Item.path} key={Item.id} {...Item} />)
            }
            </div>
            <Separator isActive={isActive} />
        </div>
    )
}

export default SidebarSection