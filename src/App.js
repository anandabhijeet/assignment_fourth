import React from "react";
import FormPage from "./Pages/FormPage/FormPage";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlist" element={<Homepage />}></Route>
        <Route path="/userform" element={<FormPage />}></Route> 
        <Route path={"*"} element={<Navigate replace to ="/userlist"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
