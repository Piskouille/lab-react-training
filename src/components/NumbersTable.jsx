const NumbersTable = props => {

    let content = []

    for (let i = 1 ; i < props.limit + 1 ; i++){
        content.push(<div key={i} style={{boxSizing:'border-box', border: 'solid 1px black', display:'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50, backgroundColor: i%2 ? 'red' : '', fontWeight: 800}}> {i} </div>) 
    }

    return (
        <div style={{display:'flex', flexWrap:'wrap', width: 250}}>
            {content}
        </div>
    )
}

export default NumbersTable