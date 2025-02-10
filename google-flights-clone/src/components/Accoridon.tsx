import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className="max-w-4xl mx-auto container justify-center items-center my-12">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "transparent",
          borderBottom: "1px solid gray",
          color: "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            How can I find last-minute flight deals?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can easily find last-minute flights using the Google Flights
            platform. Simply select the departure and destination cities from
            the form at the top of the page, then choose travel dates from the
            calendar to see the lowest available prices. You can even check
            flights departing today. To find the cheapest prices, it is usually
            recommended to book at least a few weeks in advance for domestic
            flights and a few months in advance for international flights.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
            backgroundColor: "transparent",
            borderBottom: "1px solid gray",
            color: "white",
          }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            How can I find affordable flights for weekend trips?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On the Google Flights platform, you can find deals for weekend trips
            or week-long getaways. Enter the departure and destination cities at
            the top of the page. Then open the date picker and set the travel
            duration to see how round-trip fares vary on different days. To view
            one-way fares, adjust the trip type. The most affordable flights are
            highlighted, making them easy to find. Once you select your dates,
            click the Search button to view flight options and book at a
            discounted price. You can also enable price tracking to receive
            alerts if the route or flight price changes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{
            backgroundColor: "transparent",
            borderBottom: "1px solid gray",
            color: "white",
          }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            How can I find flight deals if my travel plans are flexible?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Even if your plans are uncertain, you can easily search for flights.
            1. Tap on Explore at the top of the page. 2. Then tap on the
            calendar icon. 3. Switch to Flexible dates and select a time frame
            or trip duration. 4. Tap Done. The map will show trip options with
            the most affordable flights highlighted. Tap on a destination to
            view available flight options that you can book. Price analyses and
            other helpful tools can help you discover more options that fit your
            schedule and budget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        sx={{
            backgroundColor: "transparent",
            color: "white",
          }}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography component="span" sx={{ width: "33%", flexShrink: 0 }}>
            How can I find affordable flights to anywhere?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            On the Google Flights platform, you can find affordable flight deals
            to destinations worldwide. Simply enter your departure city and
            select Anywhere as your destination in Explore. You can specify
            certain dates or leave the departure and return dates blank if your
            plans are flexible. The lowest-priced tickets to popular
            destinations will be displayed. To make planning your
            budget-friendly trip easier, you can filter results to show only
            non-stop flights or flights under a specific price. If you have a
            destination in mind, you can enable price tracking to get alerts
            when there are changes in the route or flight price.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
