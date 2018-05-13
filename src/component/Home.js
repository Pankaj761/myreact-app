import React from "react";

export class Home extends React.Component{
    render(){
        var text="Some text";
        // console.log(this.props)
        return (
            <div>
                <p>
                 Hello World !!<br/>
                    <p>{text}</p><br/>
                    <p>
                        your name is : {this.props.user.name} and age is : <code>{this.props.user.age}</code>
                    </p>
                    <div>
                        <h4>Hobbies</h4>
                        <ul>
                            {this.props.user.hobies.map((x,i)=><li key={i}>{x}</li>) }
                        </ul>
                    </div>
                </p>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}
