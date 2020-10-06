import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import './pacingScore.css';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class PacingScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pacing: "",
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
      const sloth = (
        <div>
          <span className="boldText">Sloth</span> (slow-paced)
        </div>
      );
      const rabbit = (
        <div>
          <span className="boldText">Rabbit</span> (medium-paced)
        </div>
      );
      const cheetah = (
        <div>
          <span className="boldText">Cheetah</span> (fast-paced)
        </div>
      );
    
      const theme = createMuiTheme({
        palette: {
          primary: { main: "#6b6b6b" }, // Purple and green play nicely together.
          secondary: { main: "#6b6b6b" }, // This is just green.A700 as hex.
        },
      });

    return (
      <>
        <p className="title" style={{ paddingTop: 45 }}>
            What is the 
          <span className="pacingColor"> P A C I N G</span> of this book?
        </p>

        <div className="radios">
            <MuiThemeProvider theme={theme}>
                <FormControl component="fieldset">
                <RadioGroup name="pacing" onChange={this.handleChange}>
                    <FormControlLabel
                    value="slow-paced"
                    control={<Radio />}
                    label={sloth}
                    />
                    <FormControlLabel
                    value="medium-paced"
                    control={<Radio />}
                    label={rabbit}
                    />
                    <FormControlLabel
                    value="fast-paced"
                    control={<Radio />}
                    label={cheetah}
                    />
                
                </RadioGroup>
                </FormControl>
            </MuiThemeProvider>
        </div>
      </>
    );
  }
}


export default PacingScore;
