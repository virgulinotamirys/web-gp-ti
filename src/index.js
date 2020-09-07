import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import './assets/scss/mat-react.scss';

import Components from "./views/Components/Components.js";
import ComoFunciona from "./views/LandingPage/S_ComoFunciona.js";
import Equipe from "./views/SectionEquipe/S_Equipe.js";
import CoursePage from "./views/LandingPage/S_Cursos.js";
import CardPage from "./views/LandingPage/S_Portfolio.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={Equipe} />
      <Route path="/como-funciona" component={ComoFunciona} />
      <Route path="/card" component={CardPage} />
      <Route path="/course" component={CoursePage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
