import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavbarMob from "./NavbarMob";
import NavbarWeb from "./NavbarWeb";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <NavbarMob /> : <NavbarWeb />;
}
