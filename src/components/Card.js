import React from "react";

const Card = (props) =>{
    const {id,name,email} = props
    return(
        <div className="tc bg-light-green dib br3 pa3 ma3 grow">
            <img alt="robot" src={`https://robohash.org/${id}?200*200'`}></img>
            <h2>{name}</h2>
            <h2>{email}</h2>
        </div>
    )
}
export default Card;