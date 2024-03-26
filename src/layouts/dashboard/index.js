import { useTheme } from "@mui/material/styles";
import { Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/Logo_IUH.ico";
import { Nav_Buttons } from "../../data";
import {  Gear } from "phosphor-react";



const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <>
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.primary.main,
        boxShadow: " 0px 0px 2px rgba(0, 0, 0, 0.25)",
        width: 100,
        height: "100vh",

      }}>
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}>
        <Stack alignItems={"center"} spacing={2}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              height: 64,
              width: 64,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
            }}>
            <img src={Logo} alt="Logo_IUH"></img>
          </Box>
          <Stack
            spacing={3}
            sx={{ width: "max-content" }}
            direction="Column"
            alignItems="Center">
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 1.5,
                  }}>
                  <IconButton
                    sx={{ width: "max-content", color: "black" }}
                    key={el.index}>
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index);
                  }}
                  sx={{ width: "max-content", color: "black" }}
                  key={el.index}>
                  {el.icon}
                </IconButton>
              )
            )}
            <Divider sx={{ width: "48px" }} />
          </Stack>
        </Stack>
        <Stack>
          {selected === 2 ? (
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 1.5,
              }}>
              <IconButton sx={{ width: "max-content", color: "black" }}>
                <Gear />
              </IconButton>
            </Box>
          ) : (
            <IconButton
              onClick={() => {
                setSelected(2);
              }}
              sx={{ width: "max-content", color: "black" }}>
              <Gear />
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Box>
    <Outlet />
    </>
  );
};

export default DashboardLayout;
