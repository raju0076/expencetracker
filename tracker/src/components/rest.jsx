import axios from "axios";
import { useEffect, useState } from "react";
import { Star } from 'lucide-react';
import { useSelector } from "react-redux";


function Restaurants() {
   
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const city=useSelector((state)=>state.city)
  console.log(city)

  useEffect(() => {
    if (!city) return;

    axios.get(`https://eatecho-3.onrender.com/top-items?city=${city}`)
    .then((response) => {
      console.log(response.data);
      setRestaurants(response.data);  
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching restaurants:", error);
      setLoading(false);
    });
  }, [city]);

  return (
    <>
      <div className="w-full min-h-screen bg-gray-900 text-white p-4">
        <h1 className="text-center text-2xl font-bold text-yellow-400 my-4">
          Top 5 Food Items in Nearby Restaurants {city}
        </h1>

        {loading ? (
          <p className="text-center text-4xl">Loading...</p>
        ) : (
          <ul className="flex flex-col items-center gap-6 ">
            {restaurants.map((item, index) => (
              <div 
                key={index} 
                className="w-11/12 lg:w-full bg-gray-800 rounded-lg p-4 shadow-md grid grid-cols-1 md:grid-cols-2 gap-4"
              >
               
                <div className="p-4">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h3 className="flex items-center text-lg">
                    <strong className="mr-2">Rating:</strong> {item.rating}
                    <Star className="text-yellow-400 w-4 h-4 ml-1" />
                  </h3>
                  <h3>
                    <strong>Address:</strong> 
                    <span className="text-red-500 ml-1">{item.address}</span>
                  </h3>
                </div>

                {/* Food Items */}
                <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-gray-500 p-2">
                  {item.top_items.map((ele, index) => (
                    <div 
                      key={index} 
                      className="min-w-[200px] text-center bg-white text-black rounded-lg p-3 shadow-md"
                    >
                      <img 
                        src={ele.image} 
                        alt={ele.name} 
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <button className="mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition">
                        {ele.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
     
    </>
  );
}

export default Restaurants;
