        import React from "react";
        import { Typography } from "@mui/material";
        import { TextField, Button } from "@mui/material";
        import '../FormSection/FormPageSection.css'

        const FormPageSection = () => {
            return( 
                

                <div className="form-section">  
                <Typography variant="h3">New User</Typography>
                <div className="name form-content" >
                <Typography className="form-key">Name: </Typography>
                <TextField id="outlined-search" label="Name" type="text"/>

                </div>
                <div className="birth-date form-content"> 
                <Typography className="form-key">Birthday: </Typography>
                <TextField id="outlined-search"  type="date"/>
                </div>
                <div className="gender form-content">
                    <Typography className="form-key">Gender:</Typography>
                <TextField id="outlined-search" label="Gender" type="text"/>
                </div>
                <div className="address form-content">
                    <Typography className="form-key">Address: </Typography>
                <TextField id="outlined-search" label="address" type="text"/>
                </div>
                

                <div className="country form-content"> 
                <Typography className="form-key"> Country: </Typography>
                <TextField id="outlined-search" label="Country" type="text"/>
                </div>
                <div className="college form-content">
                    <Typography className="form-key">College:</Typography>
                <TextField id="outlined-search" label="College" type="text"/>
                </div>
                <div className="hobbies form-content"> 
                <Typography className="form-key">Hobbies:</Typography>
                <TextField id="outlined-search" label="Hobbies" type="text"/>
                </div>
            
                <div className="short-bio form-content"> 
                <Typography className="form-key">Short Bio: </Typography>
                <TextField id="outlined-search" label="Short Bio" type="text"/>
                </div>
                <div className="long-bio form-content"> 
                <Typography className="form-key">Long Bio:</Typography>
                <TextField id="outlined-search" label="Bio" type="text"/>
                </div> 
                <Button style={{
                    marginTop: "20px" 
                }} variant="contained">Submit</Button>

            
                    
                </div>
            )
        }

        export default FormPageSection