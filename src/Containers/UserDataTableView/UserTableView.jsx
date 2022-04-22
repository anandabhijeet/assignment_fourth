import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "../UserDataTableView/UserTableView.css"
const UserTableView = (prop) => { 
  // console.log('prop',prop.data[0])
  return (
    <div className="tableData-view">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell className="heading" align="left">Name</TableCell>
              <TableCell className="heading" align="left">BirthDay</TableCell>
              <TableCell className="heading" align="left">Gender</TableCell>
              <TableCell className="heading" align="left">Address</TableCell>
              <TableCell className="heading" align="left">Intro</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prop.data?prop.data.map(
              (data, index)=>(
                <TableRow key={index}>
                  <TableCell align="left">{data.name}</TableCell>
                  <TableCell align="left">{data.birthday}</TableCell>
                  <TableCell align="left">{data.gender}</TableCell>
                  <TableCell align="left">{data.address}</TableCell>
                  <TableCell align="left">{data.short_bio}</TableCell>
                </TableRow>
              )
            ):<TableCell align="center">Null</TableCell>}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserTableView;
