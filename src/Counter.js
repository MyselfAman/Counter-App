import React , { Component } from "react";
import { ThemeContext } from "./App";
export default class Counter extends Component{
    constructor(props){
        super(props)

        this.state ={
            count : this.props.initialCount
        }
    }
    
    render(){
     console.log("Render Counter");

        return (
            <ThemeContext.Consumer>
                {style => (
                    <>
                        <button style={style} onClick={() => this.setCount(-1)}>-</button>
                        <p>{this.state.count}</p>
                        <button style={style} onClick={() => this.setCount(1)}>+</button>
                    </>
                )}
                

            </ThemeContext.Consumer>
        )
    }
    setCount(amount){
        this.setState (prevCount => {
            return {count: prevCount.count + amount}
        })
    }
}