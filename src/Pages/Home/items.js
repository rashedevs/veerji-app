import React from "react";

const Items = (props) => {
  //   console.log(props);
  const { id, title, thumbnailUrl } = props?.single;

  return (
    <div>
      <p>{id}</p>
      <img src={thumbnailUrl} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Items;
