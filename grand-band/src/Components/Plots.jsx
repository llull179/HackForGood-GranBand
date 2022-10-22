import {Box, Typography} from "@mui/material";
import Plot from 'react-plotly.js';

export default function Plots(props) {
    const colors = ['red','blue','green','yellow','orange']
    return(
        <Box sxx={{backgroundColor:'blue'}}>
            <Typography variant='h4' sx={{color:'#005454'}}>{props.titol}</Typography>
        <Plot 
        data={[
          {
            y: props.y,
            x: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            type: 'scatter',
            mode: 'lines',
            marker: {color: colors[0]},
          },
        ]}
        layout={ {width: 500, height: 300} }
      />

      </Box>
    )
}