import BoxColor from "./BoxColor"

const CreditCard = props => {
    const rgb = hexToRgb(props.bgColor)

    // let image 
    // if(props.type === "visa"){
    //     image = <img src="/img/visa.png" 
    //     style={{justifySelf: 'end'}}
    //     alt="visa"/>
    // }
    // if(props.type === "Master Card"){
    //     image = <img src="/img/master-card.svg"
    //         style={{justifySelf: 'end'}}
    //         alt="master-card"/>
    // }

    const cbNumber = '•••• •••• •••• ' + props.number.slice(12)

    return <BoxColor {...rgb} >
        <div style={{alignSelf: "flex-end", padding: '20px'}}><img style={{width: "50px"}} src={props.getImage()} alt=""/></div>
        <div style={{color: props.color, padding: '20px', fontSize: '35px'}}>{cbNumber}</div>
        <div style={{color: props.color, alignSelf: "flex-start", padding: '20px'}}>
            <div>Exprires {props.expirationMonth.toString().length === 1 ? '0' + props.expirationMonth : props.expirationMonth}/{props.expirationYear} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {props.bank}</div>
            <div>{props.owner}</div>
        </div>
    </BoxColor>
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  export default CreditCard