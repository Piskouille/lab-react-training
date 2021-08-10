import React, { Component } from 'react'

export class Carrousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: 0
        }
        this.handleCarrousel = this.handleCarrousel.bind(this)
    }

    handleCarrousel(side){
        if(side === 'right'){
            this.setState({
                img: (this.state.img + 1) % 4
            })
        }
        if(side === 'left'){
            this.setState({
                img: (this.state.img - 1) % 4
            })
        }
    }

    render() {
        return (
            <div style={{margin:'50px', display: 'flex', flexDirection: 'column', width: '200px'}}>
                <img 
                    src={this.props.carrouselContent[Math.abs(this.state.img)]} alt="" 
                />
                <div className="buttons" style={{display: 'flex', justifyContent:'center'}}>
                    <button className="left" onClick={() => this.handleCarrousel('left')}>Left</button>
                    <button className="right" onClick={() => this.handleCarrousel('right')}>Right</button>
                </div>
            
            </div>
        )
    }
}

export default Carrousel
