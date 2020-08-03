import React from 'react';
import { NavLink } from 'react-router-dom';
import ProjectPage from './ProjectPage';

const PortfolioPage = () => (
    <div>
        <h1>My Projects</h1>
        <p>Check out the following project:</p>
        <div>
            <NavLink to="/portfolio/1" activeClassName="is-active">Project 1 </NavLink>
            <NavLink to="/portfolio/2" activeClassName="is-active">Project 2 </NavLink>
        </div>
    </div>
);

export default PortfolioPage;