import React from 'react';
import { Link } from "react-router-dom";

const NotFoundPage=()=>{
    return(
    <div>
    <p>404!<Link to="/">-Go home</Link> </p>
    </div>
    );
};
export default NotFoundPage;