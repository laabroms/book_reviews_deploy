import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMapMarkerAlt, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";



import './personalInfo.css';




const optionsCountry = [
  { value: 'US', label: "United States" },
  { value: 'CA', label: "Canada" },
  { value: 'Other', label: "Other" },
  
];

const optionsLocation = [
  {value:"AL", label:'Alabama'},
  {value:"AZ", label:'Arizona'},
  {value:"AR", label:'Arkansas'},
  {value:"CA", label:'California'},
  {value:"CO", label:'Colorado'},
  {value:"CT", label:'Connecticut'},
  {value:"DC", label:'District of Columbia'},
  {value:"DE", label:'Delaware'},
  {value:"FL", label:'Florida'},
  {value:"GA", label:'Georgia'},
  {value:"HI", label:'Hawaii'},
  {value:"ID", label:'Idaho'},
  {value:"IL", label:'Illinois'},
  {value:"IN", label:'Indiana'},
  {value:"IA", label:'Iowa'},
  {value:"KS", label:'Kansas'},
  {value:"KY", label:'Kentucky'},
  {value:"LA", label:'Louisiana'},
  {value:"ME", label:'Maine'},
  {value:"MD", label:'Maryland'},
  {value:"MA", label:'Massachusetts'},
  {value:"MI", label:'Michigan'},
  {value:"MN", label:'Minnesota'},
  {value:"MS", label:'Mississippi'},
  {value:"MO", label:'Missouri'},
  {value:"MT", label:'Montana'},
  {value:"NE", label:'Nebraska'},
  {value:"NV", label:'Nevada'},
  {value:"NH", label:'New Hampshire'},
  {value:"NJ", label:'New Jersey'},
  {value:"NM", label:'New Mexico'},
  {value:"NY", label:'New York'},
  {value:"NC", label:'North Carolina'},
  {value:"ND", label:'North Dakota'},
  {value:"OH", label:'Ohio'},
  {value:"OK", label:'Oklahoma'},
  {value:"OR", label:'Oregon'},
  {value:"PA", label:'Pennsylvania'},
  {value:"RI", label:'Rhode Island'},
  {value:"SC", label:'South Carolina'},
  {value:"SD", label:'South Dakota'},
  {value:"TN", label:'Tennessee'},
  {value:"TX", label:'Texas'},
  {value:"UT", label:'Utah'},
  {value:"VT", label:'Vermont'},
  {value:"VA", label:'Virginia'},
  {value:"WA", label:'Washington'},
  {value:"WV", label:'West Virginia'},
  {value:"WI", label:'Wisconsin'},
  {value:"WY", label:'Wyoming'},
  {value:"AL", label:'Alberta'},
  {value:"BC", label:'British Columbia'},
  {value:"LB", label:'Labrador'},
  {value:"MB", label:'Manitoba'},
  {value:"NB", label:'New Brunswick'},
  {value:"NF", label:'Newfoundland'},
  {value:"NS", label:'Nova Scotia'},
  {value:"NU", label:'Nunavut'},
  {value:"NW", label:'North West Territory'},
  {value:"ON", label:'Ontario'},
  {value:"PE", label:'Prince Edward Island'},
  {value:"QC", label:'Quebec'},
  {value:"SK", label:'Saskatchewan'},
  {value:"YU", label:'Yukon'},
  {value:"N/A", label:'N/A'},
];

class PersonalInfoAuthor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      location: "",
      country: "",
      isState: null,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeAge = (e) => {
    this.setState(
      {
        age: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };
  handleChangeLocation = (e) => {
    this.setState(
      {
        location: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };
  handleChangeCountry = (e) => {
    this.setState(
      {
        country: e.value,
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      }
    );
  };

  render() {
    const title = {
      paddingTop: 20,
      color: "#797D7F",
    };


    return (
      <>
        <p style={title}>Personal Information</p>

        <Container>
          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Your Name:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <input
                  className="inputField"
                  required
                  name="name"
                  placeholder="Name"
                  onBlur={this.handleChange}
                />
              </div>
            </Col>
          </Row>

          
          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>State/Province:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <Select
                  name="location"
                  onChange={this.handleChangeLocation}
                  options={optionsLocation}
                  placeholder="State/Province"
                  isSearchable={false}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faGlobe}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Country:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <Select
                  name="country"
                  onChange={this.handleChangeCountry}
                  options={optionsCountry}
                  placeholder="Country"
                  isSearchable={false}
                />
              </div>
            </Col>
          </Row>
        </Container>

       
      </>
    );
  }
}




export default PersonalInfoAuthor;
