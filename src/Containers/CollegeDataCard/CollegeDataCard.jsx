    import React, { useEffect } from "react";
    import { Card, Typography } from "@mui/material";
    import "../CollegeDataCard/CollegeDataCard.css";

    const CollegeDataCard = (prop) => { 
        // useEffect(()=>{
        //     console.log("card", prop)
        // },[])
    return (
        <div >
        <Card className="custom-card">
            <div className="college-card-data">
            <Typography className="card-key">Name:</Typography>
            <Typography>{prop.name}</Typography>
            </div>
            <div className="college-card-data">
            <Typography className="card-key">Country:</Typography>
            <Typography>{prop.country}</Typography>
            </div>
            <div className="college-card-data">
            <Typography className="card-key">Domain:</Typography>
            <Typography>{prop.domains}</Typography>
            </div>
        </Card>
        </div>
    );
    };

    export default CollegeDataCard;
