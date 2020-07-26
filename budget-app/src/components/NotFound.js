import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div align='center'>
        <p>Error 404!</p>
        <p>Page Not Found</p>
        <Link to='/'>Go to Home Page</Link>
    </div>

);

export default NotFoundPage;