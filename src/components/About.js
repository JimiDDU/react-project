import Header from "./Header"
import { Link, Outlet } from "react-router-dom";


function About() {
  return (
    <div>
        <Header></Header>
        <h1>
            About Page
        </h1>
        <Link to={"aboutme"}><h3>About Me</h3></Link>
        <Link to={"aboutwebsite"}><h3>About Website</h3></Link>
        <Outlet />
    </div>
  )
}

export default About