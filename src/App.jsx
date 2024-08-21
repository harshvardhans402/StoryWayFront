import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import StoryOptions from "./components/StoryOptions";
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/storyOption" element={<StoryOptions />}></Route>
        </Routes></BrowserRouter>
    </>
  )
}
export default App;