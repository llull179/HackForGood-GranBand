import { useState } from "react";
import { Box ,TextField, Typography} from "@mui/material";

export default function Historial(props) {
    const [coment,setComent] = useState(props.comentari);

    return(
        <Box sx={{
            width: 275,
            height: 225,
            margin:2,
            border: 'solid',    
            borderRadius:3,
            backgroundColor: '#B9EBC630',
            
          }}>
            <Typography sx={{color:'#005454'}} variant="h6"><b>Date: </b>{props.data}</Typography>
            <Typography sx={{color:'#005454'}} variant="h6"><b>Type: </b>{props.tipus}</Typography>
            
            <TextField id="coment" value={coment} onChange={(e)=>setComent(e.target.value)} label ={'Coments'} placeholder={"Add coment..."}/>
        </Box>
    )
}