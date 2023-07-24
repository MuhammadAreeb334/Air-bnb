export default function Cards(props) {
    let badgeText 
    if(props.items.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.items.location === "Online") {
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText = true && <div className="card-badge">{badgeText} </div>}
            <img src= {props.items.coverImg}  className="card-img"/>

            <div className="card-stats">
                <i className="fa-solid fa-star"></i>
                <span>{props.items.stats.rating}</span>
                <span className="grey">({props.items.stats.reviewCount})</span>
                <span className="grey">..{props.items.location}</span>
            </div>
            
            <dv>
                <p className="card-title">{props.items.title}</p>
                <p className="card-price"><span className="Bolder">From ${props.items.price} </span>/ person</p>
            </dv>
            
        </div>
    )
}
