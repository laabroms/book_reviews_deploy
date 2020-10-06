import React from "react";
import "./accessibilityScore.css";
import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

class AccessibilityScore extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        accessibility: 50,
      }
    }


    

    
   handleChange = (newValue) => {
       this.setState({
           accessibility: newValue
       },
         () => {
           if (this.props.onChange) {
             this.props.onChange(this.state);
           }
         })
    //  alert(newValue);
    //  if(newValue === 0) {
    //    this.setState(
    //      {
    //        accessibility: "0",
    //        accessibilityVal: "Inaccessible",
    //      },
    //      () => {
    //        if (this.props.onChange) {
    //          this.props.onChange(this.state);
    //        }
    //      }
    //    );
    //  }
    //  else if (newValue === 50) {
    //    this.setState(
    //      {
    //        accessibility: "50",
    //        accessibilityVal: "Somewhat accessible",
    //      },
    //      () => {
    //        if (this.props.onChange) {
    //          this.props.onChange(this.state);
    //        }
    //      }
    //    );
    //  }
    //  else if (newValue === 100) {
    //    this.setState(
    //      {
    //        accessibility: "100",
    //        accessibilityVal: "Age-appropriate",
    //      },
    //      () => {
    //        if (this.props.onChange) {
    //          this.props.onChange(this.state);
    //        }
    //      }
    //    );
    //  }
     

   }

   render() {
     const { classes } = this.props;
   

  return (
    <>
      <p className="title">
        <span className="colorChange6">ACCESSIBILITY SCORE:</span> How
        accessible is this{" "}
        <span className="colorChange6">book's language?</span>
      </p>

      <div className={classes.root}>
        <Slider
          onChange={(e, value) => this.handleChange(value)}
        //   defaultValue={50}
          value={this.state.accessibility}
          //   valueLabelFormat={valueLabelFormat}
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
    paddingTop: 10,
    backgroundColor: "#e3e3e3",
    borderColor: "#d1d1d1",
    border: "4px solid",
    borderRadius: 10,
  },
});


const marks = [
  {
    value: 0,
    label: "Dense",
  },
  {
    value: 50,
    label: "Somewhat tricky",
  },
  {
    value: 100,
    label: "Conversational",
  },
  
];

// function valuetext(value) {
//   return `${value}`;
// }

// function valueLabelFormat(value) {
//   return marks.findIndex((mark) => mark.value === value) + 1;
// }


export default withStyles(styles)(AccessibilityScore);
