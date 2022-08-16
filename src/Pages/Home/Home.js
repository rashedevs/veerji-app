import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./Home.css";
const Home = () => {
  const [allData, setData] = useState();
  //   const url = info;
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <h2>This is fuzzy search page</h2>
      <div>Total data : {allData?.length}</div>
      <div class="products">
        {allData?.map((single) => (
          <Item key={single.id} single={single}></Item>
        ))}
      </div>
    </div>
  );
};

export default Home;
