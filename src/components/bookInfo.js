import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Route, Link } from "react-router-dom";
import axios from 'axios';
import FadeIn from "react-fade-in";
import { Spinner } from "react-bootstrap";


class BookInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
      title: Object.values(this.props.match.params).toString(),
      author: '',
      publisher: '',
      pub_year: '',
      isbn: '',
      score1: '',
      score2: '',
      score3: '',
    };
  }
  
  
  
  
  componentDidMount = async() => {
    


     var url =
          "https://cors-anywhere.herokuapp.com/https://rotten-books.herokuapp.com/bookAdmin/api/get_all_books";
        const response = await axios.get(url)

        this.setState({books: response.data}) 

        var length = this.state.title.length;
        // console.log(length)



        var index = findWithAttr(this.state.books, 'title', this.state.title.toString(), length);


        var title = this.state.books[index].fields['title'];
         this.setState({
           title: title,
         });

        // console.log(this.state.title)
        var author = this.state.books[index].fields['author'];
        this.setState({
          author: author
        })
        // console.log(this.state.author)
        var publisher = this.state.books[index].fields['publisher'];
        this.setState({
          publisher: publisher
        })
        var pub_year = this.state.books[index].fields['pub_year'];
        this.setState({
          pub_year: pub_year
        })
        var isbn = this.state.books[index].fields['isbn'];
        this.setState({
          isbn: isbn
        })
        var score1 = this.state.books[index].fields['score1'];
        this.setState({
          score1: score1
        })
        var score2 = this.state.books[index].fields['score2'];
        this.setState({
          score2: score2
        })
        var score3 = this.state.books[index].fields['score3'];
        this.setState({
          score3: score3
        })


    
  }

 


  

  render() {
    const { title } = this.props.match.params;

    if (this.state.author !== '') {
      return (
        <FadeIn>
          <div style={{ paddingLeft: 30 }}>
            <p style={{ fontSize: 20}}>
              <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>{this.state.title}</span> by {this.state.author}
            </p>

            <p>Publisher: {this.state.publisher}</p>
            <p>Publishing Year: {this.state.pub_year}</p>
            <p>ISBN: {this.state.isbn}</p>
            <p>Score 1: {this.state.score1}</p>
            <p>Score 2: {this.state.score2}</p>
            <p>Score 3: {this.state.score3}</p>

            <nav>
              <p>
                <Link to={`/books/${title}/parent-survey`}>Parent Survey</Link>
              </p>
              <p>
                <Link to={`/books/${title}/critic-survey`}>Critic Survey</Link>
              </p>
              <p>
                <Link to={`/books/${title}/author-survey`}>
                  Author/Illustrator Survey
                </Link>
              </p>
              <p>
                <Link to={`/books/${title}/teacher-survey`}>
                  Teacher Survey
                </Link>
              </p>
            </nav>
          </div>
        </FadeIn>
      );
    } else {
        return (
          <div
            style={{
              position: "fixed",
              left: "50%",
              top: "50%",
            }}
          >
            <Spinner animation="border" role="status" variant="secondary">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </div>
        );
      }
  }
}


function findWithAttr(array, attr, value, length) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i].fields[attr].substring(0, length) === value) {
      return i;
    }
  }
  return -1;
}


export default BookInfo;