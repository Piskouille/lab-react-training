import React from "react"

const Greetings = props => {
    switch (props.lang) {
        case 'fr':
            return <div>Bonjour {props.children}</div>
            
        case 'de':
            return <div>Hallo {props.children}</div>
            
        case 'en':
            return <div>Hi {props.children}</div>
            
        case 'es':
            return <div>Hola {props.children}</div>
            
        default:
            break;
    }
}

export default Greetings