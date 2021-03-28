import React from 'react';
import style from './Markslist.module.style.css';

export const Header = ({toDoLength}) => {
    return(<header> You have {toDoLength} todos</header>)
}