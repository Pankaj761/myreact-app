import React from "react";

export class Home extends React.Component{
    render(){
        console.log(this.props)
        return (
            <div>
                <p>
                 Hello World !!<br/>
                    <p>
                        your name is : {this.props.user.name} and age is : {this.props.user.age}
                    </p>
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobies.map(x=><li>{x}</li>)}
                        </ul>
                    </div>
                </p>
            </div>
        );
    }
}