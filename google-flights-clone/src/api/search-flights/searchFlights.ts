import axios from "axios";

export interface SearchFlightsParams {
    originSkyId: number;
    destinationSkyId: number;
    originEntityId: number;
    destinationEntityId: number;
    date: string;
    cabinClass?: string;
    adults?: number;
    sortBy?: string;
    currency?: string;
    market?: string;
    countryCode?: string;
}

export const SearchFlights = async ({params}: {params: SearchFlightsParams}) => {

    try {
        const response = await axios.get(
          `https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights`, 
          {
            params: {
              originSkyId: params.originSkyId, // Replace with dynamic values
              destinationSkyId: params.destinationSkyId, // Replace with dynamic values
              originEntityId: params.originEntityId, // Replace with dynamic values
              destinationEntityId: params.destinationEntityId, // Replace with dynamic values
              date: params.date,
              cabinClass: params.cabinClass,
              adults: params.adults,
              sortBy: params.sortBy,
              currency: params.currency,
              market: params.market,
              countryCode: params.countryCode,
            },
            headers: {
              "X-RapidAPI-Key": "f741b72d05msh0c553e839d14d3bp14cf49jsnfa0d38c4629b",
              "X-RapidAPI-Host": "sky-scrapper.p.rapidapi.com",
            },
          }
        );
        console.log("Flights:", response.data);
        return response.data
      } catch (error) {
        console.error("Error fetching flights:", error);
      } 
}