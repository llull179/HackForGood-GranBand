import Conflicte from "./Conflicte"
import { Grid} from "@mui/material"

export default function Historial(props) {
    
    const confls = [['2/03/2022','Caiguda',''],['27/04/2022','Caiguda',''],['28/04/2022','Caiguda',''],['05/05/2022','Caiguda',''],['30/05/2022','Caiguda',''],['18/06/2022','Pujada cardiaca','Estres'],['22/06/2002','Caiguda','No va ser greu'],['14/07  /2002','Poca activitat física','']]
    
    return(
        <Grid  container>
            { confls.map( c => (
                        <Conflicte 
                            data={c[0]}
                            tipus={c[1]}
                            comentari={c[2]}
                        />
                    ))}

        </Grid>
        
    )
}