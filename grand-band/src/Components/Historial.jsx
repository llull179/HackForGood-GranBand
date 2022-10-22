import {Grid    } from "@mui/material";
import Plots from "./Plots"


export default function Historial(props) {

    const horesDorm = [7,8,7,9,7,6,4,5,8,9,7,8,7,7,7,6,4,5,2,9,7,8,7,9,7,6,12,5,8,9];
    const minutsAct = [60,120,75,80,90,20,15,30,140,20,65,80,75,80,90,75,80,90,90];
    const mitjFreq = [74,62,76,74,74,68 ,74,72,75,76,76,74,74,70,74,72,75,76,76,74,74,71,74,72,75,76];
    const tension = [90,90,91,92,93,88,91,92,91,90,91,92,91,88,86,88,90,90,91]
    return(
        <div>
            <Grid container spacing ={3} direction="column">
                <Grid  container alignItems={'center'} justifyContent={'center'} spacing ={4} direction="row">
                    <Grid item>
                    <Plots bckColor={'lightgreen'} titol={'SLEEPING HOURS'} y={horesDorm}/>
                    </Grid>
                    <Grid item> 
                         <Plots bckColor={'forestgreen'} titol={'MINUTES OF ACTIVITY'} y={minutsAct}/>
                    </Grid>
                </Grid>
                <Grid  container alignItems={'center'} justifyContent={'center'} spacing={4} direction="row">
                <Grid  item >
                <Plots bckColor={'lightgreen'} titol={'MEDIUM HEART RATE'} y={mitjFreq}/>                 </Grid>
                    <Grid item> 
                    <Plots bckColor={'forestgreen'} titol={'SYSTOLIC BLOOD PRESSURE'} y={tension}/>
                </Grid>

                <Grid container alignItems={'center'} justifyContent={'center'} spacing ={4} direction="row">
                    <Grid item>
                    <Plots bckColor={'lightgreen'} titol={'SLEEPING HOURS'} y={horesDorm}/>
                    </Grid>
                    <Grid item> 
                    <Plots bckColor={'lightgreen'} titol={'MEDIUM HEART RATE'} y={mitjFreq}/>                 </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
           
        </div>
       
    )
}