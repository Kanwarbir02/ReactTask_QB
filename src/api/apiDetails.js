import axios from "axios";


const fetchMovieData = async () => {
    try {
        const {data} = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        
            

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchMovieData;