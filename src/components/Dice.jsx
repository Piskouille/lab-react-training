import React, { Component } from 'react'

export class Dice extends Component {
    constructor(props){
        super(props)
        this.state = {
            output: 3,
            clicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    random(){
        return Math.round(Math.random() * 6) + 1
    }

    handleClick(){
        if(this.state.clicked) return 

        this.setState({
            output : "-empty",
            clicked: true
        }, 
        () => setTimeout(() =>       
            this.setState({
                output : this.random(),
                clicked: false
            }), 1000)
        )
    }

    render() {
        return (
            <div 
                onClick={this.handleClick}
                style={{width: '100px', height: '100px'}}>
                <img style={{width: '100%', height: 'auto'}} src={`/img/dice${this.state.output}.png`} alt="" />
            </div>
        )
    }
}

export default Dice
