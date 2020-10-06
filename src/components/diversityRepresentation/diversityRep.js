import React from 'react';

import './diversityRep.css';

export default class DiversityRep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diversityAndRepresentation: "",
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
          How do you feel about the{" "}
          <span className="colorChange7">DIVERSITY </span>
          and <span className="colorChange7">REPRESENTATION </span>
          in this book?
        </p>

        <textarea
          className="textarea"
          
          name="diversityAndRepresentation"
          //   value={this.state.diversityAndRepresentation}
          //   onChange={(e) => this.setState({ diversityAndRepresentation: e.target.value })}
          onBlur={this.handleChange}
        ></textarea>
      </>
    );
  }
}