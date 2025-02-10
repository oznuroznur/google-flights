"use client";
import Header from "./components/Header";
import Filter from "./components/Filter";
import { Typography } from "@mui/material";
import Map from "./components/Map";
import CardComp from "./components/Card";
import Accordions from "./components/Accoridon";
import Footer from "./components/Footer";

export default function Component() {
  const cities = [
    {
      title: "Dubai",
      price: "₺5.614",
      date: "19 May - 26 May",
      image: "/dubai.png",
      type: "Direct",
      time: "3s 15d",
    },
    {
      title: "Paris",
      price: "₺5.614",
      date: "19 May - 26 May",
      image: "/paris.png",
      type: "Direct",
      time: "3s 15d",
    },
    {
      title: "Dubai",
      price: "₺5.614",
      date: "19 May - 26 May",
      image: "/dubai.png",
      type: "Direct",
      time: "3s 15d",
    },
    {
      title: "Paris",
      price: "₺5.614",
      date: "19 May - 26 May",
      image: "/paris.png",
      type: "Direct",
      time: "3s 15d",
    },
  ];
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

      <Map />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto container justify-center items-center pt-4">
        {cities.map((city) => (
          <CardComp
            title={city.title}
            price={city.price}
            date={city.date}
            image={city.image}
            type={city.type}
            time={city.time}
          />
        ))}
      </div>

      <Accordions />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto container justify-center items-center">
        {cities.reverse().map((city) => (
          <CardComp image={city.image} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
