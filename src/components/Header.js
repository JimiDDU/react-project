import { color } from "@mui/system";
import { NavLink } from "react-router-dom";

function Header() {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "none",
      color: isActive? "white" : "aquamarine",
      fontSize: "20px"
    };
  };

  return (
    <div className="header">
      <div className="appname">MYweb</div>
      <div className="nav">
        <ul>
          <NavLink style={navLinkStyles} to={'/'}><li>Home</li></NavLink>
          <NavLink style={navLinkStyles} to={'/about'}><li>About</li></NavLink>
          <NavLink style={navLinkStyles} to={'/contact'}><li>Contact</li></NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;
