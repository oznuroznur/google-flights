import { Chip } from "@mui/material";
import { Info } from "lucide-react";

function Map() {
  return (
    <div className="h-[350px] mb-32 max-w-4xl mx-auto container items-center justify-center">
      <div className="">
        <p className="font-semibold text-xl text-white flex flex-row items-center">
          İstanbul kalkışlı tüm uçuşlar arasında düşük fiyatlı olanları bulun
          <Info size={24} className="text-neutral-700 ml-3" />
        </p>
        <div className="space-x-2 p-6">
          <Chip
            label="İstanbul"
            variant="outlined"
            sx={{
              color: "white",
              height: "40px",
              width: "80px",
              borderRadius: "20px",
            }}
          />
          <Chip
            label="Bursa"
            variant="outlined"
            sx={{
              color: "white",
              height: "40px",
              width: "80px",
              borderRadius: "20px",
            }}
          />
          <Chip
            label="Tekirdağ"
            variant="outlined"
            sx={{
              color: "white",
              height: "40px",
              width: "80px",
              borderRadius: "20px",
            }}
          />
          <Chip
            label="Edremit"
            variant="outlined"
            sx={{
              color: "white",
              height: "40px",
              width: "80px",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1329608.8511011878!2d29.155945821853024!3d40.51411163548864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadbcbf424a153%3A0xacefca4d8098da74!2zxLBzdGFuYnVsIFNhYmloYSBHw7Zrw6dlbiB1bHVzbGFyYXJhc8SxIEhhdmFsaW1hbsSx!5e0!3m2!1str!2str!4v1739196738853!5m2!1str!2str"
        width="100%"
        height="350px"
        title="map"
      ></iframe>
    </div>
  );
}

export default Map;
