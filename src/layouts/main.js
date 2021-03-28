import React from 'react';
import { renderRoutes } from 'react-router-config';
import { MenuConfig } from '../components/menuconfig';

export const MainLayout = props => {
    return (
        <div>
            <nav><MenuConfig /></nav>
            <div>{renderRoutes(props.route.routes)}</div>
        </div>
    )
}