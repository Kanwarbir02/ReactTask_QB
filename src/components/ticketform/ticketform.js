import useStyles from "./ticketform.module.css";
import { useParams } from "react-router-dom";

const Ticketform = () => {

    const {id} = useParams();

    const classes = useStyles;

    const handleSubmit = (e) => {
        e.preventDefault();

       
    }

    return ( 
        <div>
            <div className={classes.container}>
                <div className={classes.brandlogo}></div>
                <div className={classes.brandtitle}>Movie</div>
                <div className={classes.inputs}>
                    
                    <input className={classes.inpForm} type="text" placeholder="Your Name" />
                    <input className={classes.inpForm} type="email" placeholder="Your Email" />
                    <input className={classes.inpForm} type="text" placeholder="Your Phone Number" />
                    
                    <button className={classes.btnform} type="submit" onClick={handleSubmit} >LOGIN</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Ticketform;