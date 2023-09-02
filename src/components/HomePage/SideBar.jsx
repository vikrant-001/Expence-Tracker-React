import { useContext } from "react";
import AuthContext from "../AuthContext/Auth-context";
import classes from "./SideBar.module.css"
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const authCtx = useContext(AuthContext);
    const logoutHandler = () =>{
        authCtx.logout();
    }
    return (<div>
        <div className={classes.sideMain}>
            <p><NavLink to='/complete' className={classes.active}>Complete Profile</NavLink></p>
            <p>Edit Details</p>
            <p>Verify Email</p>
            <p onClick={logoutHandler}>Logout</p>
        </div>
    </div>)
}
export default SideBar;