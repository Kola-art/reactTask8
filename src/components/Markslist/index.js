import React from 'react';
import { iconTypes } from '../icon/iconTypes';
import { Button } from '../button';
import style from './Markslist.module.style.css';
import { v4 } from 'uuid';
import { ToDoList} from './List';
import { Header } from './Header';
import { SubmitForm} from './Form';




 

export class DoList extends React.Component {
     state = {
         list: []
     }

    constructor(props) {
         super(props);
         this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
   
    handleAdd(value){
        this.setState({list:this.state.list.concat({
            id: v4(),
            value
            })
        })
    }

    handleDelete(id){
       this.setState((prev) =>{
           return{
               list: prev.list.filter(element =>{
                   return element.id !== id
               })
           }
       })

    }

    render(){
        return(
            <div className="container">
            <Header toDoLength={this.state.list.length} />
            <ToDoList onDelete={this.handleDelete} list={this.state.list} />
            <SubmitForm onAdd={this.handleAdd} />
            </div>
        )
    }
}