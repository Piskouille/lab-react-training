const Rating = props => {
    let num = Math.round(props.children)
    let content = []

    for(let i = 0; i < 5 ; i++){
        if(num>0) content.push(<span key={i}>★</span>) 
        if(num <= 0) content.push(<span key={i}>☆</span>)
        num--
    }

    return <div>{content}</div>
}

export default Rating