import React from "react";

const Item = (props) => {
  const { id, title, thumbnailUrl } = props.single;
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <img src={thumbnailUrl} alt="" />
    </div>
  );
};

export default Item;
