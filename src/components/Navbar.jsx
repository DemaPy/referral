import { Link } from "react-router-dom"
import navbar from "../navigation/navbar"
import Logo from "../assets/Logo.svg"
import NavDashboard from "./NavDashboard"









const Navbar = () => {
  return (
    <nav className="py-8 flex items-center gap-24">
      <Link to={"/"}>
        <img src={Logo} alt="" />
      </Link>
      <ul className="flex gap-8 font-syncopate text-lg text-white">
      {
        navbar.map(Item => <Link className="uppercase" key={Item.id} to={Item.path}><Item.component /></Link>)
      }
      </ul>
      <div className="grow">
        <NavDashboard />
      </div>
    </nav>
  )
}

export default Navbar