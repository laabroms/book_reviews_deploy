import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserCircle, faImage } from "@fortawesome/free-solid-svg-icons";
import "../personalInfo/personalInfo.css";
import { Container, Row, Col } from "react-bootstrap";



import Select from "react-select";

const options = [
  { value: "Baby Books", label: "Baby Books" },
  { value: "Picture Books", label: "Picture Books" },
  { value: "Readers", label: "Readers" },
  { value: "Chapter Books", label: "Chapter Books" },
  { value: "Middle Grade Novels", label: "Middle Grade Novels" },
  { value: "Young Adult", label: "Young Adult" },
];
const platform = [
  { value: "YouTube", label: "YouTube" },
  { value: "Blog", label: "Blog" },
  { value: "Twitter", label: "Twitter" },
  { value: "Instagram", label: "Instagram" },
  { value: "Magazine", label: "Magazine" },
  { value: "Newspaper", label: "Newspaper" },
  { value: "Journal", label: "Journal" },
  { value: "Other", label: "Other" },
  
];

class PlatformInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platform: "",
      accountName: "",
      bookType: null,
      book: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  handleChangeBookType = (bookType) => {
    var type;

    if (bookType == null) {
      this.setState({
        bookType,
      });
    } else {
      for (var i = 0, l = bookType.length; i < l; i++) {
        type += bookType[i].value + ", ";
      }
      var sliced = type.substring(9);
      // console.log(sliced);
      this.setState({ bookType });

      this.setState({ book: sliced }, () => {
        if (this.props.onChange) {
          this.props.onChange(this.state);
        }
      });
    }
  };

  handleChangePlatform = (e) => {
    this.setState(
      {
        platform: e.value,
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
        <p style={title}>Platform Information</p>

        <Container>
          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faImage}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Platform Type:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <Select
                  onChange={this.handleChangePlatform}
                  options={platform}
                  isSearchable={false}
                  placeholder="Platform Type"
                />{" "}
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Account Name:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <input
                  className="inputField"
                  name="accountName"
                  placeholder="Account Name"
                  onBlur={this.handleChange}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm={6} className="redColor">
              <Row>
                <FontAwesomeIcon
                  icon={faBook}
                  style={{ marginTop: 4, marginRight: 10 }}
                />
                <p>Type(s) of books you typically review:</p>
              </Row>
            </Col>
            <Col sm={6}>
              <div className="selectTab">
                <Select
                  value={this.state.bookType}
                  isMulti
                  onChange={this.handleChangeBookType}
                  options={options}
                  isClearable={false}
                  isSearchable={false}
                  placeholder="Type of book(s)"
                />{" "}
              </div>
            </Col>
          </Row>

          
        </Container>

       
      </>
    );
  }
}



export default PlatformInfo;
