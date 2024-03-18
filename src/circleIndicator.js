import React from "react";
import './CircleIndicator.css';


const CircleIndicator = ({color}) =>  {
    return (
        <div className="circle" style={{backgroundColor: color}}> Country</div>
    );
};

export default CircleIndicator;