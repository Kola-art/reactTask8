import React from 'react';
import { DoList } from '../Markslist/index';

export class ToDoComponent extends React.Component{

    render(){
      return (
        <div>
          <h1>ToDoComponent</h1>
          <DoList />
        </div>
      )
    }
  }