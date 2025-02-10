import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type CardProps = {
  title?: string;
  price?: string;
  date?: string;
  image: string;
  type?: string;
  time?: string;
};

export default function CardComp({
  title,
  price,
  date,
  type,
  time,
  image,
}: CardProps) {
  return (
    <Card
      sx={{ maxWidth: 345, color: "white", backgroundColor: "transparent", boxShadow: "none" }}
    >
      <CardMedia
        sx={{ height: 140, borderRadius: "40px" }}
        image={image}
        title="city"
      />
      <CardContent className="bg-transparent">
        <div className="flex flex-row items-center justify-between">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {price}
          </Typography>
        </div>

        <Typography variant="body2" sx={{ color: "gray", }}>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography variant="body2" sx={{ color: "gray" }}>
          {type} {" "} {time}
        </Typography>
      </CardActions>
    </Card>
  );
}
