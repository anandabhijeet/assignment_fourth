import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material"; 
import "../CollegeDataTable/CollegeTableSection.css"

const CollegeTableSection = (prop) => {  
    
   useEffect(()=>{
       console.log("college table section is live")
    //    console.log("prop",prop.data)
       
   },[])
  return <div className="data-table"> 
      
      <TableContainer component={Paper}>
          <Table aria-label="simple table">
              <TableHead className="table-head">
                  <TableRow> 
                      <TableCell id="heading">Country</TableCell>
                      <TableCell id="heading" align="left">Name</TableCell>
                      
                      <TableCell id="heading" align="left">Web-page</TableCell>
                      

                  </TableRow>
              </TableHead> 

              <TableBody>  
                  {prop.data?prop.data?.map((row, index)=>(
                     <TableRow className="table-row" key={index}>
                          <TableCell align="left">{row?.country}</TableCell> 
                      <TableCell align="left">{row?.name}</TableCell> 
                      
                      <TableCell align="left">{row?.domains}</TableCell>
                     </TableRow>
                  )): <h1>null</h1>}


              </TableBody>
          </Table>
      </TableContainer>
  </div>;
};

export default CollegeTableSection;
