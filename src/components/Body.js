import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listofrestaurants,setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log("json",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }
// conditional remdering

    // if(listofrestaurants?.length === 0) {
    //    return <Shimmer/>
    // }
    return listofrestaurants?.length === 0 ? <Shimmer/> : (
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