import axios from "axios";
import React, { useEffect, useState } from "react";
import Tables from "../components/Tables";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5210/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userData);
  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={() => navigate("/createuser")}>Create User</Button>

      <Tables data={userData} />
    </div>
  );
};

export default Home;
