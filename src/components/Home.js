import Header from "./Header"
import { useEffect, useState } from "react";
import "../App.css";
import Itemcard from "../components/Itemcard";
import { Link, Outlet} from "react-router-dom";

function Home() {
  const [state, setstate] = useState(10);
  const [data, setdata] = useState();

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setdata(res);
    }
    getData();
  }, [state]);

  return (
    <div className="App">
      <Header></Header>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        Click me : {state}
      </button>
      <div className="container">
        {data?.map((item, index) => {
          return (
            <Link to={`/${item.id}`} key={item.id}>
            <Itemcard
              key={item.id}
              firstname={item.firstName}
              lastname={item.lastName}
              email={item.email}
              number={item.contactNumber}
              age={item.age}
              dob={item.dob}
              salary={item.salary}
              add={item.address}
              image={item.imageUrl} 
              id={item.id}
            ></Itemcard></Link>
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default Home