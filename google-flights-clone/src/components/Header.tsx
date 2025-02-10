import { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "lucide-react";
import Grid from "@mui/material/Grid2";

export default function Header() {
  const [value, setValue] = useState(0);

  // Use Material UI's media query to check screen size
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          padding: isMobile ? "3px" : "6px",
        }}
      >
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Grid container alignItems="center" spacing={2}>
            {/* Left section: Logo and MenuIcon */}
            <a
              
              href="/">

             
            <Grid
              xs={12}
              sm={8}
              item
              container
              alignItems="center"
              justifyContent={isMobile ? "center" : "flex-start"}
            >
              
              <MenuIcon className="text-white mr-2" />
              <Typography
                variant="h5"
                sx={{ flexGrow: 1, color: "white" }}
                className="text-white"
              >
                Google
              </Typography>
           
            </Grid>
            </a>
            {/* Center section: Tabs */}
            <Grid
              xs={12}
              sm={8}
              item
              container
              justifyContent={isMobile ? "center" : "center"}
            >
              <Tabs
                value={value}
                onChange={handleTabChange}
                centered
                textColor="inherit"
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
                sx={{
                  flexWrap: isMobile ? "wrap" : "nowrap",
                  justifyContent: isMobile ? "center" : "space-between",
                }}
              >
                <Tab
                  label="Travel"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "100vh",
                    margin: "4px",
                  }}
                />
                <Tab
                  label="Explore"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "100vh",
                    margin: "4px",
                  }}
                />
                <Tab
                  label="Flights"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "100vh",
                    margin: "4px",
                  }}
                />
                <Tab
                  label="Hotels"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    borderRadius: "100vh",
                    margin: "4px",
                  }}
                />
              </Tabs>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
    </>
  );
}
