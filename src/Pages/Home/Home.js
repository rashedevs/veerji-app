import React, { useEffect, useState } from "react";
import Fuse from "fuse.js";
import Item from "./Item";
import "./Home.css";
import Items from "./items";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  //..............................
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://safe-mountain-05428.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  //...............................
  const newdata = allData?.slice(0, 10);
  const options = {
    includeScore: true,
    // Search in `title`
    keys: ["title"],
  };

  const fuse = new Fuse(allData, options);
  const result = fuse.search(searchText);
  //   console.log(result);
  return (
    <div>
      <h2>Welcome to Veerji</h2>
      <div className="input">
        <input
          style={{ padding: "8px 100px 8px 30px" }}
          type="text"
          placeholder="Search your Item"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
      </div>
      <div className="products">
        {(searchText === "" &&
          newdata?.map((single) => (
            <Items key={single?._id} single={single}></Items>
          ))) ||
          result?.map((single) => (
            <Item key={single?.item._id} single={single}></Item>
          ))}
      </div>
    </div>
  );
};

export default Home;
