import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../Types/types";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const descriptionLimit = 200;
  const isDescriptionLong = product.description.length > descriptionLimit;

  return (
    <Card sx={{ height: 450 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {expanded
            ? product.description
            : product.description.slice(0, descriptionLimit)}
          {isDescriptionLong && !expanded && (
            <Button size="small" onClick={handleExpand}>
              Read More
            </Button>
          )}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "right" }}
        >
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
