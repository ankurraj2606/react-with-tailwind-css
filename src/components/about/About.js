import React from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "../profile/Profile";
import ProfileClass from "../class-components/ProfileClass";

const About = () => {
  return (
    <div>
      <h1>This is the about page</h1>
      <Link to="/about/profile">
        <button className="btn">Profile</button>
      </Link>
      <Outlet />
    </div>
  );
};

// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     //console.log("About constructor");
//   }

//   render() {
//     //console.log("About render");
//     return (
//       <div>
//         <h1>This is the about page</h1>
//         <Outlet />
//         <ProfileClass name={"first child"} xyz="abc" />
//       </div>
//     );
//   }
// }

export default About;

/**
 *
 * -------------render phase of lifecycle----------
 * parent constructor
 * parent render
 *
 *    first child constructor
 *    first child render
 *
 *    second child constructor
 *    second child render
 *
 * ------------commit phase of lifecycle----------------
 *
 *    First child componentDidMount
 *    Second child componentDidMount
 *
 * parent componentDidMount
 */
