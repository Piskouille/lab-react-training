const Random = props => {
    const random = Math.round(Math.random() * props.max) + props.min

    return <div>Random value between {props.min} and {props.max} => {random}</div>
}

export default Random