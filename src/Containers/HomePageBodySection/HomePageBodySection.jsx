
import {React, useState, useEffect} from "react";
import { Switch } from "@mui/material";
import UserCard from "../../Components/UserCard/UserCard";
import "../HomePageBodySection/HomePageBodySection.css";
import UserTableView from "../UserDataTableView/UserTableView";

const BodySection = () => { 
  useEffect(()=>{
    let userDataArray = localStorage.getItem("data");
    let newUserData = JSON.parse(userDataArray);   
    setnewUserDataArray(newUserData);  
    console.log('newUserData', newUserData)
  
  },[]) 

  const [toggleSwitch, setToggleSwitch] = useState(false); 
  const [newUserDataArray, setnewUserDataArray] = useState([]); 
  
  const handleToggleSwitch = () =>{
    toggleSwitch?setToggleSwitch(false):setToggleSwitch(true);
  }

  return ( 
    <div className="homePage-body-main">
      <div className="toggle-btn">
        <Switch color="success" onChange={handleToggleSwitch} />
      </div>
       <div className="Homepage-body"> 
   
   {newUserDataArray ? toggleSwitch?(
     <UserTableView data={newUserDataArray}/>
   ):(
     newUserDataArray.map((user, index) => (
       <div key={index}>
         <UserCard
           name={user?.name}
           birthday={user?.birthday}
           gender={user?.gender}
           address={user?.address}
           short_bio={user?.short_bio}
         />
       </div>
     ))
   ) : (
     <h1>No Current User</h1>
   )}
 </div>
    </div>
   
  );
};

export default BodySection;
