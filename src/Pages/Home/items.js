import React from "react";
import "./items.css";

const Items = (props) => {
  //   console.log(props);
  const { _id, title, url } = props?.single;

  return (
    <div className="items">
      <p>ID : {_id}</p>
      <img style={{ width: "150px" }} src={url} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Items;
