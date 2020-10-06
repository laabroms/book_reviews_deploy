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

class FriendshipScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendship: "50",
      bestFriends: false,
      onlyAtSchool: false,
      outOfConvenience: false,
      fake: false,
      new: false,
      frenemies: false,
      lifelong: false,
      unhealthy: false,
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
        friendship: newValue,
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
          <span className="colorChangeFriendship">FRIENDSHIP SCORE:</span> Does
          this book feature friendships that are{" "}
          <span className="colorChangeFriendship">central to the story?</span>
        </p>

        <div className={classes.root}>
          <ThemeProvider theme={muiTheme}>
            <Slider
              onChange={(e, value) => this.handleChange(value)}
              defaultValue={50}
              value={this.state.friendship}
              // valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-custom"
              step={1}
              marks={marks}
            />
          </ThemeProvider>
        </div>
        <p className="moreInfo">
          How would you describe these
          <span className="colorChangeFriendship">
            {" "}
            friendship storylines?
          </span>{" "}
          (select all that apply)
        </p>
        {/* <div className="checkbox"></div> */}
        <div className="checkbox">
          <FormGroup col className="moreInfo">
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.bestFriends}
                  onChange={this.handleChangeCheck}
                  name="bestFriends"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Best Friends"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.onlyAtSchool}
                  onChange={this.handleChangeCheck}
                  name="onlyAtSchool"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Only-at-school Friends"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.outOfConvenience}
                  onChange={this.handleChangeCheck}
                  name="outOfConvenience"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Friends out of convenience"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.fake}
                  onChange={this.handleChangeCheck}
                  name="fake"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Fake Friends"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.new}
                  onChange={this.handleChangeCheck}
                  name="new"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="New Friends"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.frenemies}
                  onChange={this.handleChangeCheck}
                  name="frenemies"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Frenemies"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.lifelong}
                  onChange={this.handleChangeCheck}
                  name="lifelong"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Lifelong Friends"
            />
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.unhealthy}
                  onChange={this.handleChangeCheck}
                  name="unhealthy"
                  style={{
                    color: "#00c427",
                  }}
                />
              }
              label="Unhealthy friendships: mean-spirited"
            />
           
            <div className="otherInfoSection">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.other}
                    onChange={this.handleChangeCheck}
                    name="other"
                    style={{
                      color: "#00c427",
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
                    className="inputFriendship"
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

export default withStyles(styles)(FriendshipScore);
