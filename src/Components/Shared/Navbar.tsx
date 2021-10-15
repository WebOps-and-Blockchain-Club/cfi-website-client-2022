import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    variant="fullWidth"
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "red",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "black",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(20),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
    fontWeight: 700,
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "black" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Home" />
        <StyledTab label="Clubs" />
        <StyledTab label="Achivements" />
        <StyledTab label="Compitative Teams" />
        <StyledTab label="Alumni" />
        <StyledTab label="About us" />
      </StyledTabs>
      <Box sx={{ p: 3 }} />
    </Box>
  );
}

/*

<Box sx={{ bgcolor: "#000" }}>
    <StyledTabs
    value={value}
    onChange={handleChange}
    aria-label="styled tabs example"
    >
    <StyledTab label="Home" />
    <StyledTab label="Clubs" />
    <StyledTab label="Achivements" />
    <StyledTab label="Compitative Teams" />
    <StyledTab label="Alumni" />
    <StyledTab label="About us" />
    </StyledTabs>
    <Box sx={{ p: 3 }} />
</Box>

*/
