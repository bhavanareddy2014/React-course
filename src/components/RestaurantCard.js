import { RES_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId} = resData?.info;
    const image = RES_URL+ cloudinaryImageId
    return (
        <div className="res-card">
        <img className="res-img" src={image} alt="res-card"/>
        <h3>{name}</h3> 
        <h4>{cuisines?.join(", ")}</h4>
        <h5>{avgRating}</h5>
        <p>{sla?.deliveryTime}</p>
        </div>
    )
}

export default RestaurantCard;