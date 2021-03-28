import React from 'react';
import { iconTypes } from '../icon/iconTypes';
import { Button } from '../button';
import style from './Markslist.module.style.css';
import { v4 } from 'uuid';

export const ToDoList = ({list, onDelete}) =>{
    
    const handleDelete = () =>{
        onDelete();
    }

    return(
        <ul className="listContainer">
            {list.map(element =>{
                return (
                        <li key={element.id} 
                            className="listItem">
                                <input className="check" type="checkbox" /> 
                            {element.value}
                            <Button onClick={()=> onDelete(element.id)} className="Btns" color="primary" iconTypes={iconTypes.cross} />  
                        </li>)
                })}
        </ul>
    )
}