import React from "react";
import "./younger.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FadeIn from "react-fade-in";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";

class AwesomeAnimals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: "50",
      cuteAnimals: false,
      scaryAnimals: false,
      photographedAnimals: false,
      illustratedAnimals: false,
      fantasyAnimals: false,
      wildAnimals: false,
      zooAnimals: false,
      talkingAnimals: false,
      petAnimals: false,
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
        animals: newValue,
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
          <span className="colorChangeAwesome">AWESOME ANIMALS:</span> Does this
          book feature animals that are{" "}
          <span className="colorChangeAwesome">central to the story?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.animals}
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
          <span className="colorChangeAwesome"> kinds of animals</span> are
          included in this book? (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.cuteAnimals}
                  onChange={this.handleChangeCheck}
                  name="cuteAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Cute Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.scaryAnimals}
                  onChange={this.handleChangeCheck}
                  name="scaryAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Scary Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.photographedAnimals}
                  onChange={this.handleChangeCheck}
                  name="photographedAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Photographed Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.illustratedAnimals}
                  onChange={this.handleChangeCheck}
                  name="illustratedAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Illustrated Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fantasyAnimals}
                  onChange={this.handleChangeCheck}
                  name="fantasyAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Fantasy Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.wildAnimals}
                  onChange={this.handleChangeCheck}
                  name="wildAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Wild Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.zooAnimals}
                  onChange={this.handleChangeCheck}
                  name="zooAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Zoo Animals "
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.talkingAnimals}
                  onChange={this.handleChangeCheck}
                  name="talkingAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Talking Animals"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.petAnimals}
                  onChange={this.handleChangeCheck}
                  name="petAnimals"
                  style={{
                    color: "#aa00ff",
                  }}
                />
              }
              label="Pet Animals"
            />
            
            
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#aa00ff",
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
                    className="inputAwesome"
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
    label: <Hidden xsDown>Not very important</Hidden>,
  },
  {
    value: 50,
    label: "Somewhat important",
  },
  {
    value: 100,
    label: <Hidden smDown>Very central to the story</Hidden>,
  },
];

export default withStyles(styles)(AwesomeAnimals);
