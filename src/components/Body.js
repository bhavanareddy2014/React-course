import React from 'react';
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [listofrestaurants,setListOfRestaurants] = useState([]);
    const [searchtext, setSearchText] = useState("");
    const [filtereddata,setFilteredData] =  useState([]);
    //whenever a state variable changes react re-render the component
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // console.log("json",json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        
    }
// conditional remdering

    // if(listofrestaurants?.length === 0) {
    //    return <Shimmer/>
    // }
    return listofrestaurants?.length === 0 ? <Shimmer/> : (
        <div className='body'>
        <div className='top-rated-res'>
        <div className='search'>
            <div>
             <input
             type="text"
             alt="search-box"
             onChange={(e)=> {setSearchText(e.target.value)}}
             value={searchtext}
             placeholder="search"
             />
             <button className='search-box' onClick={()=> {
              const data = listofrestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchtext.toLowerCase())  
             } )
             setFilteredData(data);
              } }>search</button>
            </div>
        </div>
        <button className="filter-btn" onClick={() => {
            const filterData = listofrestaurants.filter((res) => {
               return res.ratings > 4.5
            })
            setListOfRestaurants(filterData);
        }}>Top Rated Restaurants </button>
        </div>
        <div className='rescontainer'>
            {
                filtereddata?.map((restaurant) =>   <RestaurantCard key ={restaurant.id} resData={restaurant}/>)
            }
      
        </div>
        </div>
    )
}

export default Body;