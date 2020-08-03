import React from 'react';

const ProjectPage = (props) => (
    <div>
        <h1>Thing I have done:</h1>
        <p>This page is for the Project {props.match.params.id}</p>
    </div>
);

export default ProjectPage;