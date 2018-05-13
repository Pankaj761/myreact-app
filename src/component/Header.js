import React from "react";

export const Header =(props)=>{
        return (
            <div className="navbar navbar-default">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">{props.home}</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        );

};