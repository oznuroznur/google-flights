"use client";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { Typography } from "@mui/material";
import Map from "./components/Map";

export default function Component() {  
  return (
    <div className="min-h-screen items-center mx-auto justify-center container flex-1  ">
      <Header />


      <div className="bg-[url(/banner.png)] bg-no-repeat bg-contain h-[350px] relative ">
      <Typography
        variant="h3"
        color="white"
        style={{
          textAlign: "center",
          width: "100%",
        }}
        className="absolute bottom-1/4 pb-6 text-center"
      >
        Flights
      </Typography>
      </div>
      <Filter />

      <Map/>
    </div>
  );
}
