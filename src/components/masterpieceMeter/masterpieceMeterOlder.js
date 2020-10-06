import React from "react";
import "./masterpieceMeter.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class MasterpieceMeterOlder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterpiece: 50,
    };
  }

  handleChange = (newValue) => {
    this.setState(
      {
        masterpiece: newValue,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <p className="title">
          <span className="colorChange">MASTERPIECE METER:</span> Did you like this book's <span className="colorChange">graphic design and artistic style?</span>
        </p>

        <div className={classes.root}>
          <Slider
            // value={data.masterpieceInt}
            onChange={(e, value) => this.handleChange(value)}
            defaultValue={50}
            value={this.state.masterpiece}
            // valueLabelDisplay="auto"
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={1}
            marks={marks}
          />
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingLeft: "10%",
    paddingRight: "10%",
    backgroundColor: "#e3e3e3",
    paddingTop: 10,
    borderColor: "#d1d1d1",
    border: "4px solid",
    // borderImageSource: "linear-gradient(to right, red, orange)",
    borderImageSlice: "1",
    borderRadius: 10,
  },
});

const marks = [
  {
    value: 0,
    label: "Not at all",
  },
  {
    value: 50,
    label: "Somewhat",
  },
  {
    value: 100,
    label: "Very much",
  },
];



export default withStyles(styles)(MasterpieceMeterOlder);
