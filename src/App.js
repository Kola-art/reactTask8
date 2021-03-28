import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MenuNav } from './components/menu';
import { ToDoComponent } from './components/todo';
import { FormComponent } from './components/form';
import { Home } from './components/home';
import { renderRoutes } from "react-router-config";
import { routes } from './routes';

  
  
function App() {
  return (
    <div className="App">
     
      <Router>
        <div className="config">
          <p>Made by react-router-config</p>
            {renderRoutes(routes)}
        </div>
        <div className="itemlist">
          <MenuNav />
          <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/form" component={FormComponent} />
          <Route path="/todo" component={ToDoComponent} />
          <Route path="/error" render={() => <h1> Ups... Page not found :( </h1> } />
          <Redirect to="/error" />
          </Switch>
        </div>    

      </Router>
      
    </div>
  );
}

export default App;
