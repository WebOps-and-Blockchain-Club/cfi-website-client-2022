import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    // maxWidth: 40,
    width: "70%",
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
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(25),
  marginRight: theme.spacing(3),
  marginTop: theme.spacing(1),
  marginLeft: theme.spacing(3),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export default function MyStyledTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#000" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Home" />
        {/* <Divider orientation="vertical" variant="middle" /> */}
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
