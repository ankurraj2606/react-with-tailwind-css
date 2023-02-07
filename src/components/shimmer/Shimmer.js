import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container restaurant-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div className="card shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
