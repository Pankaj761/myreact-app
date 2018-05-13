import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.age=props.age;
    }
    makeMeOlder(){
        this.age+=3;
        console.log(this.age);
    }
    render(){
        var text="Some text";
        // console.log(this.props)
        return (
            <div>
                <p>
                    <p>
                        your name is : {this.props.name} and age is : <code>{this.age}</code>
                    </p>

                </p>
                <button onClick={this.makeMeOlder.bind(this)} className="btn btn-info"> make me older</button>
            </div>
        );
    }
}
