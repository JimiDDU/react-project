import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Aboutme from "./components/Aboutme";
import Aboutwebsite from "./components/Aboutwebsite";
import UserDetails from "./components/UserDetails";
import { useParams } from "react-router-dom";
import { createContext } from "react";

export const Appcontext = createContext();

function App() {


  const [jiminame, setjiminame] = useState("jimipatelismyname")
  const { userId } = useParams();
  return (
    <Appcontext.Provider value={jiminame} >
    <Routes>
      <Route path="/" element={<Home />} >
      </Route>
      <Route path=":userId" element={<UserDetails />} />
      <Route path="/about" element={<About />}>
        <Route index element={<Aboutme />}></Route>
        <Route path="aboutme" element={<Aboutme />}></Route>
        <Route path="aboutwebsite" element={<Aboutwebsite />}></Route>
      </Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<Error />} />
    </Routes></Appcontext.Provider>
  );
}

export default App;

