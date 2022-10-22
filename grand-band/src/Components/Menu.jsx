import { useState } from "react";
import Login from "./Login";
import Interficie from "./Interficie"

const Menu =(props) => {
    const [validat,setValidat] = useState(false);
  return (
   <div>
       {validat?
       <Interficie/>
    : <Login setValidat = {setValidat}/>}
   </div>
  )
}

export default Menu
