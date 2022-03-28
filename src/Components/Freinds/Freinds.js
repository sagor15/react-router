import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Freinds = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>Hello freinds</h2>
      <p>
        <small>parle kisu taka dar dis...{friends.length}</small>
        {
            friends.map(friend=> <Friend friend={friend}></Friend>)
        }
      </p>
    </div>
  );
};

export default Freinds;
