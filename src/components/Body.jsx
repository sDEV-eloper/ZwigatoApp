import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [restrau, setRestrau] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1774553&lng=78.0077653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const jsonData = await data.json();
      const resList = jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListOfRestaurants(resList);
      setFilteredList(resList);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error state, e.g., show an error message to the user.
    }
  };

  const filterList = () => {
    const filtered = listOfRestaurants.filter((item) => item?.info?.avgRating >= 4.3);
    setFilteredList(filtered);
  };

  const searchText = (e) => {
    setRestrau(e.target.value);
  };

  const searchFilter = () => {
    const filtered = listOfRestaurants.filter((item) => item?.info?.name.toLowerCase().includes(restrau.toLowerCase()));
    setFilteredList(filtered);
  };

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <>
      <div>
        <input type="text" value={restrau} onChange={searchText} className="border-2 p-1" />
        <button className="border-2 p-1 bg-black text-white" onClick={searchFilter}>Search</button>
        <button type="button" onClick={filterList} className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
          Top Rated
        </button>
      </div>

      <div className="flex flex-wrap gap-2 m-4">
        {filteredList.map((item) => (
          <Card key={item?.info?.id} resList={item} />
        ))}
      </div>
    </>
  );
};

export default Body;
