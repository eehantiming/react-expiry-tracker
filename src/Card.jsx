function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.image} alt="item picture"></img>
            <h2 className="card-name">{props.name}</h2>
            <p className="card-expiry">{props.expiry}</p>
        </div>
    )
}

Card.defaultProps = {
    image: "https://via.placeholder.com/150",
    name: "Item name",
    expiry: "Expiry Date",
}

export default Card;