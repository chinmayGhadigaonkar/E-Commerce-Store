import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { grey, purple } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: purple[900],
  textTransform: 'none',
  fontSize: 18,
  backgroundColor: "white",
  fontFamily:['sans-serif'],
  "&:hover": {
    color:purple[900],
   
  },
}));
