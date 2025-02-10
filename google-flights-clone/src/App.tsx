"use client";
import { useState } from "react"
import Header from "./components/Header";
import Filter from "./components/Filter";
import { Typography } from "@mui/material";



interface Flight {
  airline: string;
  departure_time: string;
  arrival_time: string;
  price: number;
}

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

    {/*   <div className="max-w-4xl mx-auto -mt-6 justify-center items-center ">
        {!searched && (
           <Paper 
           style={{
            backgroundColor: "#3c4043",
           }}
           className="mt-4  shadow-lg rounded-xl overflow-hidden bg-neutral-500">
           <div className="p-4">
             <div className="flex items-center gap-4 mb-4">
               <FormControl size="small" className="min-w-[140px]">
                 <Select
                   value={tripType}
                   onChange={(e) => setTripType(e.target.value)}
                   className="   rounded"
                   startAdornment={<CompareArrows className="mr-2 text-gray-400" />}
                 >
                   <MenuItem value="roundtrip">Round trip</MenuItem>
                   <MenuItem value="oneway">One way</MenuItem>
                 </Select>
               </FormControl>
 
               <FormControl size="small" className="min-w-[120px]">
                 <Select
                   value={passengers}
                   onChange={(e) => setPassengers(e.target.value)}
                   className="   rounded"
                   startAdornment={<Person className="mr-2 text-gray-400" />}
                 >
                   {[1, 2, 3, 4, 5, 6].map((num) => (
                     <MenuItem key={num} value={num}>
                       {num} {num === 1 ? "Passenger" : "Passengers"}
                     </MenuItem>
                   ))}
                 </Select>
               </FormControl>
 
               <FormControl size="small" className="min-w-[140px]">
                 <Select
                   value={cabinClass}
                   onChange={(e) => setCabinClass(e.target.value)}
                   className="   rounded"
                 >
                   <MenuItem value="economy">Economy</MenuItem>
                   <MenuItem value="premium">Premium Economy</MenuItem>
                   <MenuItem value="business">Business</MenuItem>
                   <MenuItem value="first">First Class</MenuItem>
                 </Select>
               </FormControl>
             </div>
 
             <div className="grid grid-cols-8 gap-2 items-center mb-4 " >
               <div className="col-span-2">
                 <TextField
                   fullWidth
                   placeholder="From?"
                   value={origin}
                   onChange={(e) => setOrigin(e.target.value)}
                   size="small"
                   className="   rounded"
                   InputProps={{
                     startAdornment: <LocationOn className="mr-2 text-gray-400" />,
                   }}
                 />
               </div>
 
               <div className="flex justify-center">
                 <IconButton onClick={handleSwapLocations} className="   hover:bg-[#303134]">
                   <SwapHoriz />
                 </IconButton>
               </div>
 
               <div className="col-span-2">
                 <TextField
                   fullWidth
                   placeholder="Where to?"
                   value={destination}
                   onChange={(e) => setDestination(e.target.value)}
                   size="small"
                   className="   rounded"
                   InputProps={{
                     startAdornment: <LocationOn className="mr-2 text-gray-400" />,
                   }}
                 />
               </div>
               <div className="grid grid-cols-2 col-span-3 gap-4">
               <TextField
                 type="date"
                 label="Departure"
                 value={departDate}
                 onChange={(e) => setDepartDate(e.target.value)}
                 size="small"
                 className="   rounded"
                 InputProps={{
                   startAdornment: <CalendarMonth className="mr-2 text-gray-400" />,
                 }}
                 InputLabelProps={{ shrink: true }}
               />
               {tripType === "roundtrip" && (
                 <TextField
                   type="date"
                   label="Return"
                   value={returnDate}
                   onChange={(e) => setReturnDate(e.target.value)}
                   size="small"
                   className="   rounded"
                   InputProps={{
                     startAdornment: <CalendarMonth className="mr-2 text-gray-400" />,
                   }}
                   InputLabelProps={{ shrink: true }}
                 />
               )}
             </div>
             </div>
             <div className="flex justify-center mt-4">
               <Button
                 variant="contained"
                 onClick={searchFlights}
                 disabled={loading}
                 startIcon={<Search />}
                 style={{
                    backgroundColor: "#262626",
                    color: "white",
                 }}
               >
                 Explore
               </Button>
             </div>
           </div>
         </Paper>
        )}
        
         {loading && (
           <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
             <CircularProgress />
           </Box>
         )}
 
          
        {searched && !loading && (
          <Box>
            <Button
              variant="outlined"
              sx={{ mb: 3 }}
              onClick={resetSearch}
              className="text-white border-white hover:border-gray-300"
            >
              New Search
            </Button>

            {flights.length > 0 ? (
              <TableContainer component={Paper} className="bg-[#303134]">
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Airline</TableCell>
                      <TableCell>Departure</TableCell>
                      <TableCell>Arrival</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {flights.map((flight, index) => (
                      <TableRow key={index}>
                        <TableCell>{flight.airline}</TableCell>
                        <TableCell>{flight.departure_time}</TableCell>
                        <TableCell>{flight.arrival_time}</TableCell>
                        <TableCell>${flight.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <Typography className="text-white">
                No flights found. Try a different search.
              </Typography>
            )}
          </Box>
        )}
      </div> */}
    </div>
  );
}
