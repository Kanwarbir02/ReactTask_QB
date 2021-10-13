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
    <div key={data.show.id} margin="30px">
        <li >
        {data.show.name}
        </li>

        <img src={data.show.image.original} alt="No Image Found" height="40px" width="60px"/>

        <p>{data.show.summary}</p>

        <button>Click Here to book your Ticket!</button>
    </div>
        

    
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