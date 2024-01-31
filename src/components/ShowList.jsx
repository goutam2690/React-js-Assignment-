import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import noPoster from '../assets/no-poster.png'

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setShows(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className='flex justify-between items-center text-center bg-black text-white text-2xl py-3 font-semibold px-4 mb-4'>
        <h1>QuadB Tech</h1>
        <h1>Show List</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {shows.map((show) => (
          <div key={show.show.id} className="bg-white p-4 rounded-md shadow-md">
            <img
              src={show.show.image ? show.show.image.medium : noPoster}
              alt={show.show.name}
              className="w-full h-60 rounded-md mb-2"
            />
            <h2 className="text-lg font-semibold mb-2">
              <span className='font-normal'>Title : {" "}</span>{show.show.name}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              <span className='font-normal'>Language : {" "}</span>{show.show.language}
            </h2>
            <h2 className="text-lg font-semibold mb-2">
              <span className='font-normal'>Genres : {" "}</span>{show.show.genres.join(', ')}
            </h2>

            <Link to={`/show/${show.show.id}`}>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Read Summary
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
