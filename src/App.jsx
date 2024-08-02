import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./Landing";
import Signup from "./Signup";
import Login from "./Login";
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes></BrowserRouter>
    </>
  )
}
export default App;