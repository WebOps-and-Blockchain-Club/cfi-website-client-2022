import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavbarMob from "./NavbarMob";
import NavbarWeb from "./NavbarWeb";

export default function Header() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return matches ? <NavbarMob /> : <NavbarWeb />;
}
