import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    return (
        <div className='body'>
        <div className='search'>
        <h3> Search</h3>
        </div>
        <div className='rescontainer'>
            {
                resList?.map((restaurant) =>   <RestaurantCard key ={restaurant.id} resData={restaurant}/>)
            }
      
        </div>
        </div>
    )
}

export default Body;