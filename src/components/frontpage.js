import fetchMovieData from "../api/apiDetails";
import { useState, useEffect } from 'react';

const Frontpage = () => {

    const [showData, setShowData] = useState([]);

    useEffect(() => {
        fetchMovieData()
            .then((data => {
                
                setShowData(data)

                console.log(showData)
            }))
            .catch((err => console.log(err)))  
    }, []);

    const dataList = showData.map((data) =>

    <li key={data.show.id}>
      {data.show.name}
    </li>

    
  );


    return ( 
        <div>
            <h1>Movie Details</h1>

            <ul>{dataList}</ul>

            {/* <h2>{JSON.stringify(showData[0].score)}</h2> */}
        </div>
     );
}
 
export default Frontpage;