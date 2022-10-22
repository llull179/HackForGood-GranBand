import { useState } from "react";
import Historial from "./Historial";
import CjtConflictes from "./CjtConflictes";
import Configuracio from "./Configuracio";
import Analisis from "./Analisis"
import { AppBar ,Button, Toolbar} from "@mui/material";

const Interficie =(props) => {
    const [page,setPage] = useState(0);

    const handleClickConflicte = ()=> {
        setPage(0);
    }

    const handleClickHistorial = ()=> {
        setPage(1);
    }
    const handleClickAnalisis =() => {setPage(2)}

    const handleCLickConfiguracio =() => {setPage(3)}

    const setInterficie = () => {
        if(page===0) return(<Historial/>)
       else if(page ===1) return(<CjtConflictes/>)
        else if(page ===2) return(<Analisis/>)
        else if (page ===3) return(<Configuracio/>) 
    }

  return (
   <div>
       <AppBar sxx={{margin:3}} scolor='secondary' position ="static">
                <Toolbar>
                <Button onClick={handleClickConflicte} color="inherit">Historial</Button>
                <Button onClick={handleClickHistorial} color="inherit">Conflicts</Button>
                <Button onClick={handleClickAnalisis} color="inherit">Analysis</Button>
                <Button onClick={handleCLickConfiguracio} color="inherit">Configuration</Button>

                </Toolbar>

        </AppBar>
        <br/><br/>
       {setInterficie()}
        
   </div>
  )
}

export default Interficie


