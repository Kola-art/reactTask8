import React from 'react';
import { Link } from 'react-router-dom';
import css from './menu.module.css';

export class MenuConfig extends React.Component{
    render(){
      return (
        <ul className={css.menuitem}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li> 
            <Link to="/auth">Login</Link>
          </li>
          <li>
            <Link to="/example2">ExamplePage2</Link>
          </li>
          <li>
            <Link to="/example3">ExamplePage3</Link>
          </li>
        </ul>
      )
    }
}