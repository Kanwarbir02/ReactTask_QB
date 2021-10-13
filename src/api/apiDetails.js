import axios from "axios";


const fetchMovieData = async () => {
    try {
        const {data} = await axios.get("https://api.tvmaze.com/search/shows?q=all");
        
        // const i = 0;
        
        // const modifiedData = [
        //     data[0].show,
        //     data[1].show,
        //     data[2].show,
        //     data[3].show,
        //     data[4].show,
        //     data[5].show,
        //     data[6].show,
        //     data[7].show,
        //     data[8].show,
        //     data[9].show,
        // ]
                
        
        
        
        // console.log(modifiedData)

        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchMovieData;