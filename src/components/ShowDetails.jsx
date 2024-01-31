import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => setShow(response.data))
        .catch((error) => console.error('Error fetching show details:', error));
    }
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <div className='flex justify-between items-center text-center bg-black text-white text-2xl py-3 font-semibold px-4 mb-4'>
        <h1>QuadB Tech</h1>
        <h1>Show Details</h1>
      </div>

      {show && (
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-3xl font-bold mb-4">{show.name}</h2>

          <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: show.summary }} />
        </div>
      )}
    </div>
  );
};

export default ShowDetails;
