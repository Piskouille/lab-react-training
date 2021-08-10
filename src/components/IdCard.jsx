import React from "react"
import '../styles/IdCard.css'

const IdCard = props => {
    return(
        <div className="card-id">
            <img src={props.picture} alt={props.name} />
            <div className="card-info">
                <p><span>First name : </span>{props.firstName}</p>
                <p><span>Last name : </span>{props.lastName}</p>
                <p><span>Gender : </span>{props.gender}</p>
                <p><span>Height: </span>{props.height}</p>
                <p><span>Birth : </span>{props.birth}</p>
            </div>
        </div>
    )
}

export default IdCard
