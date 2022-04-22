    import React from "react";
    import { Card, Typography } from "@mui/material";
    import "../CollegeDataCard/CollegeDataCard.css";

    const CollegeDataCard = (prop) => { 
        console.log('prop',prop.data);
        // useEffect(()=>{
        //     console.log("card", prop)
        // },[])
    return (
        <div >
        <Card className="custom-card">
            <div className="college-card-data">
            <Typography className="card-key">Name:</Typography>
            <Typography>{prop.data[0].name}</Typography>
            </div>
            <div className="college-card-data">
            <Typography className="card-key">Country:</Typography>
            <Typography>{prop.data[0].country}</Typography>
            </div>
            <div className="college-card-data">
            <Typography className="card-key">Domain:</Typography>
            <Typography>{prop.data[0].domains}</Typography>
            </div>
        </Card>
        </div>
    );
    };

    export default CollegeDataCard;
