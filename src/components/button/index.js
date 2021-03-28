import React from 'react';
import clsx from 'clsx';
import { Icon } from '../icon/icon';
import style from './button.module.style.css';

export const Button = props => {
    const { children, className, size, color,iconTypes, ...rest} = props;
    const render = (
        <span>{iconTypes&& <Icon type={iconTypes} />} 
        {children || null}
        </span>
    );
    return(
        <button
         className={
                clsx(
                    [   style.Btns,
                        {[style[size]]: size},
                        className
                    ])
            }
            {...rest}
        > 
            {render}

        </button>
    );
}