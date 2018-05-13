import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            age:props.initalAge,
            status:0
        };
    }
    makeMeOlder(){
        this.setState({
            age:this.state.age+3
        })
    }
    render(){
        var text="Some text";
        // console.log(this.props)
        return (
            <div>
                <p>
                        your name is : {this.props.name} and age is : <code>{this.state.age}</code>
                </p>
                <hr/>
                <p>
                    status : {this.state.status}
                </p>
                <button onClick={this.makeMeOlder.bind(this)} className="btn btn-info"> make me older</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-info">greet</button>
            </div>
        );
    }
}
