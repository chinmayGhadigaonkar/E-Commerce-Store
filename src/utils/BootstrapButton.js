import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { grey, purple } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: "#0d0d0e",
  textTransform: "none",
  fontSize: "1.2rem",
  lineHeight: "1rem",

  backgroundColor: "",

  textDecoration: "none",
  fontWeight: "600",
  fontFamily: ["sans-serif"],
  border: "none",
  "&:hover": {
    color: purple[500],
    backgroundColor: "white",
  },
}));
