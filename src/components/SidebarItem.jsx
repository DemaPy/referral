import { Link } from "react-router-dom"







const SidebarItem = ({ icon, title, path, isActive }) => {

  return (
    <Link to={path} className="flex gap-3 items-center h-10 font-red_hat">
      {icon(isActive ? "#8343EB" : "#ffffff")}
        <p className={`text-[28px] transition-colors font-semibold uppercase ${isActive ? "text-violet" : "text-white"}`}>{title}</p>
    </Link>
  )
}

export default SidebarItem