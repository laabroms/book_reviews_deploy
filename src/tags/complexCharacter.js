import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import "./younger.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

class ComplexCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complexCharacter: "",
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
    const snoozefest = (
      <div>
        <span className="boldText">Too simple,</span> 1-dimensional
      </div>
    );

    const curiosity = (
      <div>
        <span className="boldText">Somewhat complex,</span> 2-dimensional
      </div>
    );

    const putDown = (
      <div>
        <span className="boldText">Very developed,</span> 3-dimensional
      </div>
    );

    const allNighter = (
      <div>
        <span className="boldText">Extremely complex,</span> they felt like real humans!
      </div>
    );

    const mytheme = createMuiTheme({
      palette: {
        primary: { main: "#6b6b6b" }, // Purple and green play nicely together.
        secondary: { main: "#6b6b6b" }, // This is just green.A700 as hex.
      },
    });

    return (
      <>
        <p className="title" style={{ paddingTop: 35 }}>
          <span className="complexTextColor">COMPLEX CHARACTER SCALE:</span> How complex and developed were the characters in this book?
        </p>

        <div className="radios">
          <MuiThemeProvider theme={mytheme}>
            <FormControl component="fieldset">
              <RadioGroup
                name="complexCharacter"
                onChange={this.handleChange}
              >
                <FormControlLabel
                  value="Snooze-Fest"
                  control={<Radio />}
                  label={snoozefest}
                />
                <FormControlLabel
                  value="Piqued My Curiosity"
                  control={<Radio />}
                  label={curiosity}
                />
                <FormControlLabel
                  value="Couldn't Put It Down"
                  control={<Radio />}
                  label={putDown}
                />
                <FormControlLabel
                  value="All-Nighter-Inducing"
                  control={<Radio />}
                  label={allNighter}
                />
              </RadioGroup>
            </FormControl>
          </MuiThemeProvider>
        </div>
      </>
    );
  }
}

export default ComplexCharacter;
