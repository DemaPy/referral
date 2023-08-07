import Help from "../components/Help";
import Home from "../components/Home";
import Invest from "../components/Invest";
import News from "../components/News";
import RealEstateProjects from "../components/RealEstateProjects";





export default [
    {
        id: 1,
        component: Home,
        path: "home"
    },
    {
        id: 2,
        component: RealEstateProjects,
        path: "real-estate-projects"
    },
    {
        id: 3,
        component: Invest,
        path: "invest"
    },
    {
        id: 4,
        component: News,
        path: "news"
    },
    {
        id: 5,
        component: Help,
        path: "help"
    },
]