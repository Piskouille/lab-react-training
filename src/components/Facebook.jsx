
import React, { useState } from 'react'
import profiles from '../data/berlin.json'
import '../styles/Facebook.css'


const countries = [...new Set(profiles.map(p => p.country))]
const countriesObj = {}
countries.forEach(c => countriesObj[c] = false)

const Facebook = props => {

    const [countryState, setcountryState] = useState(countriesObj)

    const handleClick = country => {
        setcountryState({...countryState, [country] : !countryState[country] })
    }

    return <div>

        <div className="btns">
            {countries.map((c,i) => <button key={i} style={{backgroundColor: countryState[c] ? "lightblue" : ""}} onClick={() => handleClick(c)}> {c} </button>)}
        </div>

        <div className="profile-list">
            { profiles.map((p, i) => <FacebookProfile key={i} color={countryState[p.country]} {...p}/>)}
        </div>
        
    </div>
}

const FacebookProfile = props => {

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    return <div className='fb-card' style={{backgroundColor: props.color ? "lightblue" : ""}}>
        <div className="fb-image" onClick={handleClick}>
            <img src={props.img} alt={props.lastName} />
        </div>
        
        <div className={`infos ${state ? 'displayed' : ''}`}>
            <p><span>Last name : </span>{props.lastName}</p>
            <p><span>First name : </span>{props.firstName}</p>
            <p><span>Country : </span>{props.country}</p>
            <p><span>Type : </span>{props.isStudent ? "Student" : "Teacher"}</p>
        </div>
    </div>
}

export default Facebook