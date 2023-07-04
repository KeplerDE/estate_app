import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { StyledEngineProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';



// Components
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Listings from "./Components/Listings";
import Testing from "./Components/Testing";

function App() {
  return (
    <StyledEngineProvider>
      <BrowserRouter>
        <CssBaseline />
        <Header /> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/listings" element={<Listings />}/>
          <Route path="/testing" element={<Testing />}/>
        </Routes>
      </BrowserRouter>
    </StyledEngineProvider>
  );
}

export default App;

