import React from "react";

export class Button extends React.Component{
    render() {
        const {text,onClick} = this.props
       return(
           <button onClick={onClick}>{text}</button>
       )
    }
}