import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ButtonGroup from "@mui/material-next/ButtonGroup";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  
  const navigate = useNavigate();

  const navigateToCheckout = () => {
    // 👇️ navigate to /checkout
    navigate("/checkout");
  };
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <ButtonGroup  disableElevation  variant="contained"  aria-label="Disabled button group">
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddShoppingCartIcon />}
          onClick={addToBasket}
        >
          Add to Basket
          
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<ShoppingCartCheckoutIcon />}
          onClick={navigateToCheckout}
        >
          Checkout
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Product;
