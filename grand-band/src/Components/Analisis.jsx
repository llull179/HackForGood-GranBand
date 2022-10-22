import { Button,List,ListItem,ListItemText,Grid,Box} from "@mui/material";
import { useState } from "react";



export default function Configuracio() {

    const [analisis,setAnalisis] = useState(false);
    const [results,setResults] = useState(['PERFECT!','PERFECT!','!!!','OK','PERFECT!','PERFECT!'])
const handleSubmit = () => {
    setAnalisis(true);
}

    return(
        <Box>
        <Grid alignItems='center' justifyContent='center' container spacing= {2} direction ='column'> 
           <Grid item>
           <Button  onClick = {handleSubmit} variant="contained">Make an Analysis</Button>  

           </Grid>
           <Grid item>
           {analisis? 
            <List>
                <ListItem>
                    <ListItemText primary="Physical Activity" secondary={results[0]} />

                </ListItem>
                <ListItem>
                    <ListItemText primary="Sleeping Hours" secondary={results[1]}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Mean Heart Rate" secondary={results[2]}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Diabetes"  secondary={results[3]}/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Heart Failure" secondary={results[4]}/>
                </ListItem>
                <ListItem>
                <ListItemText primary="Stroke"  secondary={results[5]}/>
            </ListItem>
            </List>:null}
           </Grid>
            

        </Grid>
        </Box>)
}