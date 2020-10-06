import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faChild } from "@fortawesome/free-solid-svg-icons";
import "./teacherInfo.css";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";



const options = [
  { value: "Preschool", label: "Preschool" },
  { value: "Kindergarten", label: "Kindergarten" },
  { value: "Elementary", label: "Elementary" },
  { value: "Middle School", label: "Middle School" },
  { value: "High School", label: "High School" },
  
];

class TeacherInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeLevel: "",
      school: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };
  handleChangeGrade = (e) => {
    this.setState(
      {
        gradeLevel: e.value,
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
        <p style={title}>Teacher Information</p>

        <Container>
          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faChild}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Grade Level:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <Select
                  name="gradeLevel"
                  onChange={this.handleChangeGrade}
                  options={options}
                  placeholder="Grade Level"
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faSchool}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>School:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <input
                  className="inputField"
                  name="school"
                  placeholder="School"
                  onBlur={this.handleChange}
                  autoCapitalize
                />
              </div>
            </Col>
          </Row>
        </Container>

       
      </>
    );
  }
}


export default TeacherInfo;
