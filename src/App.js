import React, { useEffect, useState } from "react";
import { css } from "@emotion/core";
import PropagateLoader from "react-spinners/PropagateLoader";
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Hero from "./components/Hero";
import Booking from "./components/Booking";

const override = css`
  display: block;
  margin-top: 20%;
  border-color: red;
`;

function App() {
  let [loading, setLoading] = useState(true);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    setLoading(false)
  
    },5000)

  },[]);
  return (

  <div className="App">
     {loading ?
      <PropagateLoader  color={"brown"} loading={loading} css={override} size={40} />
      :
      <>
      <Navbar/>
      <Header/>
      <Body/>
      <Hero/>
      <Booking/>
      </>
     }
    </div>
  );
}

export default App;
