import { height, minHeight } from "@mui/system";
import React from "react";
import NavBar from "../Components/NavBar/Navbar";
import BodySection from "../Containers/HomePageBodySection/HomePageBodySection";
const Homepage = () =>{
    return(
       <div style={{backgroundColor:"#f8f1e8", minHeight:"100vh"}}>
           <NavBar/> 
           
           <BodySection/>
       </div>
    )
}

export default Homepage;