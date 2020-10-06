import React from 'react';
import FadeIn from "react-fade-in";
import { Spinner } from "react-bootstrap";


export default class Submitted extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    setTimeout(
      function () {
        //Start the timer
        this.setState({ loaded: true }); //After 1 second, set render to true
      }.bind(this),
      1000
    );
  }

  render() {
    if (this.state.loaded === true) {
      return (
        <FadeIn>
          <div style={{ margin: "3%", textAlign: "center" }}>
            Thank you for taking the survey! Your responses were successfully
            submitted.
          </div>
        </FadeIn>
      );
    } else {
      return (
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
          }}
        >
          <Spinner animation="border" role="status" variant="secondary">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
  }
};

