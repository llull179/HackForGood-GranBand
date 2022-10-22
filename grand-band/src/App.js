import Menu from './Components/Menu';
import { ThemeProvider,createTheme} from "@mui/material";

 

import './App.css';



function App() {
  const theme = createTheme({
    palette: {
      primary: { main: '#005454' }, // Purple and green play nicely together.
      secondary: { main: '#005555' }, // This is just green.A700 as hex.
    },
    typography: { useNextVariants: true },
  });
  return (
    <div className="App">
      <ThemeProvider theme ={theme}>
      <Menu/>
      </ThemeProvider>
                
    </div>
  );
}

export default App;
