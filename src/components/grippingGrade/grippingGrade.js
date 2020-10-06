import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import './grippingGrade.css';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";


class GrippingGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grippingGrade: "",
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
        <span className="boldText">Snooze-Fest:</span> It was hard to get through the book.
      </div>
    );

    const curiosity = (<div><span className='boldText'>Piqued My Curiosity:</span> This book lost my attention at times, but generally kept me curious and interested.</div>);

    const putDown = (
      <div>
        <span className="boldText">Couldn't Put It Down!:</span> It was hard to stop reading, I was so engrossed!
      </div>
    );

    const allNighter = (
      <div>
        <span className="boldText">All-Nighter-Inducing:</span> I would've stayed up all night just to finish this book.
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
        <p className="title" style={{paddingTop: 45}}>
          <span className="grippingTextColor">GRIPPING GRADE:</span> Did this
          book hold your attention throughout?
        </p>

        <div className="radios">
        <MuiThemeProvider theme={mytheme}>
          <FormControl component="fieldset">
            <RadioGroup
              name="grippingGrade"
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



export default GrippingGrade;