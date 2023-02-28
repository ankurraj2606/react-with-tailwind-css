import React, { useEffect, useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    //console.log("useEffect");
  });
  //console.log("render");
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Profile Page</h2>
      <h4>{count}</h4>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Profile;
