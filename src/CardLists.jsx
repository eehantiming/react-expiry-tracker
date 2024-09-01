import Card from "./Card"
/**
* This component renders the provided datas, with expired cards on top of the rest.
*
* @param {Array} datas Objects with keys image, name and expiry.
*/
function CardList(props){ 
    const expired = props.datas.filter(data => new Date(data.expiry).getTime() < Date.now())
    const fresh = props.datas.filter(data => new Date(data.expiry).getTime() > Date.now())

    const expiredCards = expired.map(data => <Card name={data.name} expiry={data.expiry}/>)
    const freshCards = fresh.map(data => <Card name={data.name} expiry={data.expiry}/>)

    return(
        <>
            <div>
                <h2>🤮Expired</h2>
                {expiredCards}
            </div>
            <div>
                <h2>🍞Fresh</h2>
                {freshCards}
            </div>
        </>
    )
}

export default CardList;