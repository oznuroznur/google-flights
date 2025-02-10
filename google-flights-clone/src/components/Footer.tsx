import { Typography } from "@mui/material";

export default function Footer() {
  const flightRoutes = [
    "Londra - Paris uçuşları",
    "New York - Roma uçuşları",
    "Montreal - Paris uçuşları",
    "Londra - Milano uçuşları",
    "Toronto - Londra uçuşları",
    "New York - Milano uçuşları",
    "Londra - Dubai uçuşları",
    "Londra - Tokyo uçuşları",
    "Madrid - Roma uçuşları",
    "Londra - Delhi uçuşları",
    "New York - Los Angeles uçuşları",
    "Paris - Marakeş uçuşları",
    "Sao Paulo - Londra uçuşları",
    "Londra - İstanbul uçuşları",
    "Paris - Bangkok uçuşları",
    "New York - Orlando uçuşları",
    "Londra - Berlin uçuşları",
    "Chicago - Paris uçuşları",
  ];

  return (
    <footer className=" py-4 max-w-4xl mx-auto container justify-center">
      <div className="container mx-auto text-left">
        <Typography variant="h6" className="mb-4 text-white py-2">
          Popular Flight Routes
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2">
          {flightRoutes.map((route, index) => (
            <Typography
              key={index}
              variant="body2"
              className="text-blue-400/50"
            >
              {route}
            </Typography>
          ))}
        </div>
      </div>
    </footer>
  );
}
