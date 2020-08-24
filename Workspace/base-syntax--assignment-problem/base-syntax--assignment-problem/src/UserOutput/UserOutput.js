import React from 'react';
import './UserOutput.css';

const userOutput = (props) =>{
    return (
    <div className = "UserOutput">
        <p>1st Paragraph with user: {props.usrName}</p>
        <p>2nd Paragraph</p>

    </div>
        );  

};

export default userOutput;