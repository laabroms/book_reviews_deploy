import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ParentSurvey from "./surveys/parentSurvey/parentSurvey.js";
import AuthorSurvey from "./surveys/authorSurvey/authorSurvey";
import CriticSurvey from "./surveys/criticSurvey/criticSurvey";
import TeacherSurvey from "./surveys/teacherSurvey/teacherSurvey";
// import Tags from './surveys/tags';
import "bootstrap/dist/css/bootstrap.min.css";
import Books from './surveys/books';
import BookInfo from './components/bookInfo';
import Home from './components/home';
import Submitted from './components/submitted';
import NotFoundPage from './surveys/404';

function App({books}) {


  

  return (
    <Router >
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books/:title/parent-survey"}
            path={"/books/:title/parent-survey"}
            component={ParentSurvey}
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books/:title/author-survey"}
            path={"/books/:title/author-survey"}
            component={AuthorSurvey}
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books/:title/critic-survey"}
            path={"/books/:title/critic-survey"}
            component={CriticSurvey}
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books/:title/teacher-survey"}
            path={"/books/:title/teacher-survey"}
            component={TeacherSurvey}
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books"}
            path="/books"
            exact
          >
            <Books />
          </Route>
          <Route
            // path={process.env.PUBLIC_URL + "/books/:title"}
            path={"/books/:title"}
            component={BookInfo}
            exact
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "/submitted"}
            path={"/submitted"}
            component={Submitted}
            exact
          ></Route>
          <Route
            // path={process.env.PUBLIC_URL + "*"}
            path="*"
            component={NotFoundPage}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
