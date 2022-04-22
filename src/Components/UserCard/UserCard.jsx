import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./UserCard.css";

const UserCard = ({name, birthday, gender, address, short_bio}) => { 
  
  return (
    <Card
      className="user-card"
      // style={{
      //   backgroundColor: "#e7e1d8",
        
      // }}
    >
      <CardContent className="card-content">
        <div className="name content">
          <Typography className="content-key">Name:</Typography>
          <Typography>{name}</Typography>
        </div>
        <div className="birth-date content">
          <Typography className="content-key"> Birthday: </Typography>
          <Typography>{birthday}</Typography>
        </div>
        <div className="gender content">
          <Typography className="content-key">Gender:</Typography>
          <Typography>{gender}</Typography>
        </div>
        <div className="address content">
          <Typography className="content-key">Address:</Typography>
          <Typography>{address}</Typography>
        </div>
        <div className="short-bio content">
          <Typography className="content-key">Intro: </Typography>
          <Typography>
            {short_bio}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
