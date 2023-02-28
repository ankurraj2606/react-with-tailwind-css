import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // states are created here
    this.state = {
      userInfo: {
        name: "",
        id: null,
        company: "",
      },
    };
    console.log("constructor- child" + this.props.name);
  }

  async componentDidMount() {
    console.log("componentDidMount : About");

    const data = await fetch("https://api.github.com/users/ankurraj2606");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Name:{this.state.userInfo.login}</h2>
        <h4>ID : {this.state.userInfo.id}</h4>
        <h4>XYZ : {this.state.userInfo.company}</h4>
      </div>
    );
  }
}

export default ProfileClass;

/**
 * child constructor called
 * child render called
 * child componentDidMount
 *
 * API called
 * setState
 *
 * child render called
 * child componentDidUpdate
 *
 * Before Unmounting
 *
 *
 *
 */
