import React from "react";
import icon from "../img/userIcon.svg";

const User = (props) => {
  return (
    <div className="container-user">
      <p className="username">{props.username}</p>
      <img className="icon" src={icon} alt="icon" />
    </div>
  );
};

export default User;
