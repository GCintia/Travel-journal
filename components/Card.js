import React from "react"


export default function Card(props){
    return (
        <div className="container">
            <div className="img-container">
                <img className="location-img" src={props.imageUrl} />
            </div>
            <div className="card-container">
                <h4 className="country"><img className="map-img" src="./images/placeholder.png" />{props.location}
                <a href={props.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                </h4>
                <h2 className="city">{props.title}</h2>
                <p className="date">{props.startDate}-{props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
    
}