import useStyles from "./ticketform.module.css";

const Ticketform = () => {

    const classes = useStyles;

    return ( 
        <div>
            <div className={classes.container}>
                <div className={classes.brandlogo}></div>
                <div className={classes.brandtitle}>TWITTER</div>
                <div className={classes.inputs}>
                    {/* <label className={classes.labForm}>EMAIL</label> */}
                    <input className={classes.inpForm} type="text" placeholder="Your Name" />
                    <input className={classes.inpForm} type="email" placeholder="example@test.com" />
                    <input className={classes.inpForm} type="Name" placeholder="example@test.com" />
                    {/* <label className={classes.labForm}>PASSWORD</label> */}
                    
                    <button className={classes.btnform} type="submit" >LOGIN</button>
                </div>
                
            </div>
        </div>
     );
}
 
export default Ticketform;