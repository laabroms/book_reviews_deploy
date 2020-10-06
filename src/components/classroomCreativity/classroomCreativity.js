import React from "react";

import "./classroomCreativity.css";

export default class ClassroomCreativity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classroomCreativity: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  render() {
    return (
      <>
        <p style={{ paddingTop: 35 }} className="textTop">
          {" "}
          <span className="colorChangeClassroomCreativity">CLASSROOM CREATIVITY: </span>
          Do you think this book<span className="colorChangeClassroomCreativity"> inspires/could inspire classroom activities? </span>
          Feel free to give examples of what you have in mind!
        </p>

        <textarea
          className="textarea"
          name="classroomCreativity"
          onBlur={this.handleChange}
        ></textarea>
      </>
    );
  }
}
