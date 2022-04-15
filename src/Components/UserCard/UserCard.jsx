import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "./UserCard.css";

const UserCard = () => {
  return (
    <Card className="user-card">
      <CardContent className="card-content">
        <div className="name content">
          <Typography className="content-key">Name:</Typography>
          <Typography>Abhijeet Anand</Typography>
        </div>
        <div className="birth-date content">
          <Typography className="content-key"> Birthday: </Typography>
          <Typography>26-01-2001</Typography>
        </div>
        <div className="gender content">
          <Typography className="content-key">Gender:</Typography>
          <Typography>Male</Typography>
        </div>
        <div className="address content">
          <Typography className="content-key">Address:</Typography>
          <Typography>Pune</Typography>
        </div>
        <div className="short-bio content">
          <Typography className="content-key">Intro: </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            porro ea, architecto dolores ipsam delectus cum quo necessitatibus
            eos ducimus modi voluptatem velit est sit earum deserunt amet
            voluptatum ullam..?
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
