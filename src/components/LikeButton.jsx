import React, { Component } from 'react'

export class LikeButton extends Component {

    state={
        likes: 0,
        style: {
            backgroundColor : 'red'
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1, 
            style: {
                backgroundColor: 'green'
            }})
    }

    handleReset = () => {
        this.setState({
            likes: 0, 
            style: {
                backgroundColor: 'red'
            }})
    }

    render() {
        return (
            <div>
                <button 
                    onClick={this.handleClick}
                    style={{width: '110px', fontWeight: '800', padding: '20px', margin: '50px', ...this.state.style}}>
                        {this.state.likes} Like{this.state.likes === 1 ? '' : 's'}
                </button>
                <button 
                    onClick={this.handleReset}
                    style={{padding: '10px'}}>
                        Reset
                </button>
            </div>
        )
    }
}

export default LikeButton
