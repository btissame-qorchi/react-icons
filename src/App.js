
import './App.css';
import { FaReact } from "react-icons/fa";
import { MdCode } from "react-icons/md";
import { BsFillBrightnessLowFill } from "react-icons/bs";
import { FcAutomatic } from "react-icons/fc";
import { HiCode } from "react-icons/hi";
import {IconContext} from "react-icons";


function App() {
  return (
    // pour avoir le même style 
    <IconContext.Provider value={{color:'red',size:'25px'}}> 
    <div className="App" co>
      {/* Font awesome icon */}
      <p style={{color:"gray",fontSize:"12px"}}>Font awesome icon</p>
      <FaReact/>
       {/* Material Design icons */}
       <br/>
       <p style={{color:"gray",fontSize:"12px"}}>Material Design icon</p>
      <MdCode/>
      <p style={{color:"gray",fontSize:"12px"}}>Bootstrap Icons</p>
      <BsFillBrightnessLowFill/>
      <p style={{color:"gray",fontSize:"12px"}}>Flat Color Icons</p>
      <FcAutomatic/>
      <p style={{color:"gray",fontSize:"12px"}}>Heroicons</p>
      <HiCode/>
    </div>
    </IconContext.Provider>
  );
}

export default App;
