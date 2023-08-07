import { Link } from "react-router-dom";
import Button from "./ui/Button";
import Currency from "./ui/Currency";
import { useAppContext } from "../hooks/useAppContext";

const NavDashboard = () => {

  const { setLanguage, language } = useAppContext()

  return (
    <div className="flex items-center gap-6 font-syncopate ">
      <div className="flex gap-4">
        <button onClick={() => setLanguage("esp")} className={`${language === "esp" ? "text-white" : "text-dark_grey"}`}>ESP</button>
        <button onClick={() => setLanguage("eng")} className={`${language === "eng" ? "text-white" : "text-dark_grey"}`}>ENG</button>
      </div>
      <div className="flex items-center gap-4 text-black">
        <Currency.Euro />
        <Currency.Dollar />
      </div>
      <Button.s>
        <Link className="uppecase" to={"/profile"}>
          My Profile
        </Link>
      </Button.s>
    </div>
  );
};

export default NavDashboard;
