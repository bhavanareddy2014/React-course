import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    const [listofrestaurants,setListOfRestaurants] = useState(resList);
    return (
        <div className='body'>
        <div className='top-rated-res'>
        <button className="filter-btn" onClick={() => {
            const filterData = listofrestaurants.filter((res) => {
               return res.ratings > 4.5
            })

            console.log(filterData);
            setListOfRestaurants(filterData);
        }}>Top Rated Restaurants </button>
        </div>
        <div className='rescontainer'>
            {
                listofrestaurants?.map((restaurant) =>   <RestaurantCard key ={restaurant.id} resData={restaurant}/>)
            }
      
        </div>
        </div>
    )
}

export default Body;