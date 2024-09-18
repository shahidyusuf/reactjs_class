import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
//which html tags just e.g h1 vscode extension?

const AppCard = ({ title, desc, id, image }) => {
  const navigate = useNavigate();
  return (
    // <div className="row-md-2 ">
    <Card className="md-3" sx={{ maxWidth: 345, height: 400, width: 300 }}>
    {/* <div className="col-md-2"> */}
      <CardMedia
        sx={{ height: 140, objectFit: "cover" }}
        image={image}
        title={title}
      />
      {/* </div> */}

      <CardContent sx={{ height: 160 }}>
      {/* <div className="col-md-2"> */}
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        {/* </div> */}
        {/* <div className="col-md-2"> */}

        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
        {/* </div> */}
      </CardContent>
      {/* <div className="col-md-2"> */}

      <CardActions>
        <Button onClick={() => navigate(`/products/${id}`)} size="small">
          Add
        </Button>
      </CardActions>
      {/* </div> */}
    </Card>
    // </div>
  );
};
export default AppCard;
