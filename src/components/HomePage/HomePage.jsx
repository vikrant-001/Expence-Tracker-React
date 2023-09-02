import { Outlet } from "react-router-dom";
import SideBar from "./SideBar"
import classes from "./Home.module.css"

const HomePage = () => {
    return (<div>
        <h1 className={classes.heading}>Welcome To Expence Tracker</h1>
        <SideBar/>
        <Outlet/>
    </div>)
}

export default HomePage;