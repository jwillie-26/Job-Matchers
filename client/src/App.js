import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/Navbar";
import JobList from "./components/JobList/JobList";
import JobDetails from "./components/JobDetails/JobDetails";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import AddJob from "./components/AddJob/AddJob";
import Home from "./components/HomePage/Home";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div>
      <Navbar setUser={setUser} user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/jobs-page" element={<JobList />} />
        <Route path="/jobs-page/:id" element={<JobDetails user={user}/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<Login setUser={setUser} />} />
        <Route path="/post-job" element={<AddJob user={user}/>} />
      </Routes>
    </div>
  );
}
