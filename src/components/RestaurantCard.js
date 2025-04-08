
const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisine,image,ratings,delivery_time} = resData;
    return (
        <div>
        <img src={image}/>
        <h3>{name}</h3>
        <h4>{cuisine?.join(", ")}</h4>
        <h5>{ratings}</h5>
        <p>{delivery_time}</p>
        </div>
    )
}

export default RestaurantCard;