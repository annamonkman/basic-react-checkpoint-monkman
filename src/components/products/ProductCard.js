import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { StyledCard } from "./Card.styled";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../context/CartContext";
import { wishlistActions } from "../../store/wishlist-slice";

const ProductCard = (props) => {
  const { increaseCartQuantity } = useCart();
  const { title, price, id, image } = props.item;

  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isInWishlist = wishlistItems.some((item) => id === item.id);

  const dispatch = useDispatch();

  const addItemToWishlistHandler = () => {
    dispatch(wishlistActions.addItemToWishlist(props.item));
  };

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
          <button onClick={addItemToWishlistHandler}>
            {isInWishlist ? (
              <HiOutlineHeart className="heart svg in-wishlist" />
            ) : (
              <HiOutlineHeart className="heart svg" />
            )}
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
