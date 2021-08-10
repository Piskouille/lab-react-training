import React, { Component } from 'react'

export class ClickablePicture extends Component {

    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        this.setState({
            toggle: !this.state.toggle
        })
    }

    
    render() {
        return <div onClick={this.handleToggle}>
            <img style={{width: 200}}src={`/img/persons/maxence${this.state.toggle ? "-glasses" : ""}.png`} alt="" />
            </div> 
        }

}

export default ClickablePicture
