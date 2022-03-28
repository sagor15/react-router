import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  let navigate = useNavigate();
  const showDetailUser = () => {
    const path = `/Friend/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={showDetailUser}>
        {username}:{id}
      </button>
    </div>
  );
};

export default Friend;
