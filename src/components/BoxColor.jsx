const BoxColor = props => {

    const backgroundColor = `rgb(${props.r}, ${props.g}, ${props.b})`

    const style = {
        backgroundColor,
        width: '400px',
        height: '230px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: props.children ? 'space-between' : 'center',
        alignItems: 'center'
    }

    if(props.children){
     return  <div style={style}>
        {props.children}
    </div>      
        }
    return <div style={style}>
        <span style={{display: 'block'}}>{backgroundColor}</span>
        <span style={{display: 'block'}}>{rgbToHex(props.r, props.g, props.b)}</span>
    </div>
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  export default BoxColor