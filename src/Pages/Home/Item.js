import React from "react";
import "./Item.css";

const Item = (props) => {
  const { _id, title, url } = props?.single?.item;

  return (
    <div className="item">
      <p>ID : {_id}</p>
      <img style={{ width: "150px" }} src={url} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Item;
