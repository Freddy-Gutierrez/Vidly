import React, { Component } from "react";

const Like = props => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <iprops
      onClick={props.onClick}
      className={classes}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    />
  );
};

export default Like;
