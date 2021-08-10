import Rating from "./Rating"

const DriverCard = props => {
    return <div style= {{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blueviolet',
        borderRadius: '5px',
        margin: '15px',
        height: '150px',
        width: '450px'

    }}>

        <div className="image" style={{
            width: '60px',
            height: '60px',
            overflow: 'hidden',
            borderRadius: '50%',
            marginRight: '30px'
        }}>
            <img src={props.img} alt={props.name} style={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'cover',
            }} />
        </div>

        <div className="infos" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-center',
            width: '200px'
        }}>
            <h3 style={{
                padding: 0,
                margin: 0
        }}>{props.name}</h3>
            <Rating>{props.rating}</Rating>
            
            <div>
                <span>{props.car.model} - </span>
                <span>{props.car.licensePlate}</span>
            </div>
        </div>

    </div>
}

export default DriverCard