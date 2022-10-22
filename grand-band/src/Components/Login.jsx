import { TextField,Grid,Box, Button} from "@mui/material"
//import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  
import { useState } from "react";


export default function Login(props){

    const [usuari,setUsuari] = useState('');
    const [pasword,setPasword] = useState('');
    const [error,setError] = useState(false);


    const handleSubmit = (e) => {
        if(usuari==='') {
          setUsuari('');
          setPasword('');
          setError(true);
          return;
        }
        
        props.setValidat(true);
      }

  return (
   <div>
        <Box > 
         <Grid sx={{marginTop:4}} alignItems='center' justifyContent='center' container spacing= {5} direction ='column'>
            <Grid item>
                <TextField value = {usuari} onChange={(e)=>setUsuari(e.target.value)} error={error} id='usuari' placeholder='User' label='User'/>
            </Grid>
            <Grid item>
                <TextField value = {pasword} onChange={(e)=>setPasword(e.target.value)} error={error} id='pasword' placeholder='Password' label='Password'/>
            </Grid>
            <Grid item>
                <Button onClick = {handleSubmit} variant="outlined">Iniciar Sessió</Button>  
            </Grid>

            <Grid item>
                {error? <p>Ups! Your <it>User</it> or you <it>Password</it> is not correct. Try it again!</p>:null}
            </Grid>
        </Grid> 
       
        </Box>

   </div>
  )
}