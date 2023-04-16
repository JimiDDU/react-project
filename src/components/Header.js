import { color } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../App";

function Header() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      color: isActive? "white" : "aquamarine",
      fontSize: "20px"
    };
  };

  const myvalues = useContext(Appcontext)

  return (
    <div className="header">
      <div className="appname">MYweb</div>
      <div className="nav">
        <ul>
          <NavLink style={navLinkStyles} to={'/'}><li>Home</li></NavLink>
          <NavLink style={navLinkStyles} to={'/about'}><li>About</li></NavLink>
          <NavLink style={navLinkStyles} to={'/contact'}><li>Contact</li></NavLink>
          <li>{myvalues}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
