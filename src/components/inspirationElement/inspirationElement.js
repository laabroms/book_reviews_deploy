import React from "react";
import "../chatterBar/chatterBar.css";
import './inspirationElement.css';
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FadeIn from "react-fade-in";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Hidden from '@material-ui/core/Hidden';

class InspirationElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inspiration: 50,
      resilience: false,
      perseverance: false,
      kindness: false,
      bravery: false,
      hope: false,
      generosity: false,
      empathy: false,
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
        inspiration: newValue,
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
          <span className="inspirationTextColor">INSPIRATION ELEMENT:</span> How
          much did this book{" "}
          <span className="inspirationTextColor"> inspire</span> you?
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.inspiration}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          What
          <span className="inspirationTextColor"> kind of qualities</span> (if
          any) does this book inspire in you? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.character}
                  onChange={this.handleChangeCheck}
                  name="resilience"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Resilience"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.plot}
                  onChange={this.handleChangeCheck}
                  name="perseverance"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Perseverance"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.plot}
                  onChange={this.handleChangeCheck}
                  name="kindness"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Kindness"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.setting}
                  onChange={this.handleChangeCheck}
                  name="bravery"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Bravery"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.educational}
                  onChange={this.handleChangeCheck}
                  name="hope"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Hope"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.educational}
                  onChange={this.handleChangeCheck}
                  name="generosity"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Generosity"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.emotional}
                  onChange={this.handleChangeCheck}
                  name="empathy"
                  style={{
                    color: "#eb34c6",
                  }}
                />
              }
              label="Empathy"
            />
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#eb34c6",
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
                    className="inputInspo"
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
        color: "#4d4d4d",
      },
      track: {
        color: "#2b2b2b",
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
    label: <Hidden xsDown>Not at all</Hidden>,
  },
  {
    value: 50,
    label: "Somewhat",
  },
  {
    value: 100,
    label: <Hidden xsDown>Extremely inspired</Hidden>,
  },
];



export default withStyles(styles)(InspirationElement);
