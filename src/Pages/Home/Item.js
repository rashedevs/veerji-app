import React from "react";

const Item = (props) => {
  const { id, title, thumbnailUrl } = props?.single?.item;

  return (
    <div>
      <p>{id}</p>
      <img src={thumbnailUrl} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Item;
