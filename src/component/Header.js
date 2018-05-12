import React from "react";

export class Header extends React.Component{
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}