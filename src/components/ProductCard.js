import { StyledCard } from "./styles/Card.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const ProductCard = ({
  addToWishlist,
  product,
  title,
  image,
  price,
  id,
  activeTab,
  active,
  name,
}) => {
  const { increaseCartQuantity } = useCart();

  return (
    <StyledCard className="card">
      <img src={`${image}`} alt={title} />

      <div className="info">
        <h4 title={title}>{title}</h4>
        <p>
          <span>£</span>
          {` ${price}`}
        </p>

        <div className="buttons">
          <button
            onClick={() => addToWishlist(product, name)}
            className={`svg heart ${active[name] && activeTab}`}
          >
            <HiOutlineHeart
              style={{
                fill: active[name] ? "#f5142e" : "",
              }} // ! AVOID USING INLINE STYLING
            />
          </button>

          <button onClick={() => increaseCartQuantity(id)}>
            <HiOutlineShoppingCart className="svg cart" />
          </button>
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
