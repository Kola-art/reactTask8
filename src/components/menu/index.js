import React from 'react';
import { Link } from 'react-router-dom';
import css from "./menu.module.css";

export class MenuNav extends React.Component{

    render(){
      return (
        <div className={css.menu}>
          <ul className={css.menuitem}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li> 
              <Link to="/form">FormComponent</Link>
            </li>
            <li>
              <Link to="/todo">ToDoComponent</Link>
            </li>
          </ul>
        </div>
      )
    }
  }
    