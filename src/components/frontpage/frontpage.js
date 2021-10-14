import fetchMovieData from "../../api/apiDetails"
import { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import useStyles from "./frontpage.module.css";

const Frontpage = () => {

    const classes = useStyles;

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
    <div key={data.show.id} margin="30px" className={classes.listData}>
        <li className={classes.listComp}>
            {data.show.name}

            <img src={data.show.image.medium} alt="No Image Found" height="120px" width="100px" />

            <p className={classes.summaryf}>{data.show.summary}</p>

            <Link to="/form" ><button movieName = {data.show.name} className={classes.btnform}>
                Book Your Ticket for {data.show.name}!
                </button>
            </Link>

        </li>

        

        

        {/* <button>Click Here to book your Ticket!</button> */}

        
        
    </div>
        

    
  );


    return ( 
        <div className={classes.container}>
            <h1 className={classes.header}>Movie Details</h1>

            <ul className={classes.listData}>{dataList}</ul>

        </div>
     );
}
 
export default Frontpage;