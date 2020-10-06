import React from "react";
import "./chatterBar.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FadeIn from "react-fade-in";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

class ChatterBarCritic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatter: 50,
      character: false,
      plot: false,
      setting: false,
      educational: false,
      emotional: false,
      other: false,
      otherInfo: "",
    };
  }

  handleChangeCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeOtherInfo = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  handleChange = (newValue) => {
    this.setState(
      {
        chatter: newValue,
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
          <span className="colorChange3">CHATTER BAR:</span> How much did you{" "}
          <span className="colorChange3">talk or think</span> about this book
          after you finished reading it?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.chatter}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          Which element(s) of the book would you most likely want to
          <span className="colorChange3"> discuss</span> after reading?
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.character}
                  onChange={this.handleChangeCheck}
                  name="character"
                  style={{
                    color: "#c300ff",
                  }}
                />
              }
              label="The characters"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.plot}
                  onChange={this.handleChangeCheck}
                  name="plot"
                  style={{
                    color: "#c300ff",
                  }}
                />
              }
              label="The plot"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="setting"
                  style={{
                    color: "#c300ff",
                  }}
                />
              }
              label="The setting"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.educational}
                  onChange={this.handleChangeCheck}
                  name="educational"
                  style={{
                    color: "#c300ff",
                  }}
                />
              }
              label="The educational elements"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.emotional}
                  onChange={this.handleChangeCheck}
                  name="emotional"
                  style={{
                    color: "#c300ff",
                  }}
                />
              }
              label="The emotional aspects"
            />
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#c300ff",
                    }}
                  />
                }
                label="Other"
              />
              {this.state.other ? (
                <FadeIn>
                  <input
                    name="otherInfo"
                    onBlur={this.handleChangeOtherInfo}
                    className="inputChatter"
                  />
                </FadeIn>
              ) : null}
            </div>
          </FormGroup>
        </div>
      </>
    );
  }
}

const styles = (theme) => ({
  root: {
    width: "100%",
    paddingLeft: "10%",
    paddingTop: 10,
    paddingRight: "10%",
    backgroundColor: "#e3e3e3",
    border: "4px solid",
    borderColor: "#d1d1d1",
    // borderImageSource: "linear-gradient(to right, #f87D1D, #5222E2)",
    borderImageSlice: "1",
    borderRadius: 10,
  },
});

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#666666",
      },
      track: {
        color: "#8c8c8c",
      },
      rail: {
        color: "black",
      },
    },
  },
});

const marks = [
  {
    value: 0,
    label: "Not at all",
  },
  {
    value: 50,
    label: "A little bit",
  },
  {
    value: 100,
    label: "Non-stop",
  },
];

// function valuetext(value) {
//   return `${value}`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }

export default withStyles(styles)(ChatterBarCritic);
