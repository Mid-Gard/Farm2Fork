
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import "./Learn.css";

function Learn({ title }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [Learn, setLearn] = useState([]);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="LearnHome">
      <div className="Learncontainer">
        <div className="MainContent">
          <div className="LearnHeading">
            <p>Gadgets</p>
          </div>
          <div className="LearnHeading">
            <p>Good Farming Practices</p>
          </div>
        </div>
        <div className="Learnidebar"></div>
      </div>
    </div>
  );
}

export default Learn;
