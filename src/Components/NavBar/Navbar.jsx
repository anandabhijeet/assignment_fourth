import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        // elevation={"0px"}
        style={{ backgroundColor: "#8FBDD3" }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "#035397" }}
            
          >
            Users
          </Typography> 

          <Button
            variant="contained"
            style={{
              backgroundColor: "#BE8C63",
              marginRight: "10px",
              color: "#035397",
            }}
            onClick={()=>{
              navigate('/userlist')
            }}

          >
            Home
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#BE8C63",
              marginRight: "10px",
              color: "#035397", 
            
            }}
            onClick={()=>{ 
              
              navigate('/userform')
            }}
          >
            Add New User
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#BE8C63",
              marginRight: "10px",
              color: "#035397",
            }}
          >
            Clear List
          </Button> 
          
          <Button
            variant="contained"
            style={{
              backgroundColor: "#BE8C63",
              marginRight: "10px",
              color: "#035397",
            }}
          >
            Colleges
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
