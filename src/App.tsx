import React from 'react';
import { Route } from 'react-router';
import './App.css';
import { HeaderNavigation } from 'components/HeaderNavigation';
import { HomePage } from 'pages/HomePage';
import { LogInForm } from 'pages/LogInForm';
import { SignUpForm } from 'pages/SignUpForm';
import { Tasks } from 'pages/Tasks';
import { RedirectHomeRoute } from 'routers/RedirectToHomeRoute';
import { RedirectToTasksRoute } from 'routers/RedirectToTasksRoute';

function App() {
  return (
    <div className="App">
      <HeaderNavigation />
      <Route exact path="/home_page" component={HomePage} />
      <Route exact path="/sign_up" component={SignUpForm} />
      <RedirectToTasksRoute exact path="/log_in" component={LogInForm} />
      <RedirectHomeRoute exact path="/tasks" component={Tasks} />
    </div>
  );
}

export default App;
