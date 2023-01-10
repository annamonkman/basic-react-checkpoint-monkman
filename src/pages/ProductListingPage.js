import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "../components/ProductCard";

const ProductListingPage = ({
  onAddToWishlist,
  onRemoveFromWishlist,
  isInWishlist,
  data,
  error,
  loading,
}) => {
  return (
    <StyledPlp>
      <div className="grid">
        {error ? (
          <p>Error</p>
        ) : loading ? (
          <p>loading</p>
        ) : (
          data.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              product={product}
              onAddToWishlist={onAddToWishlist}
              onRemoveFromWishlist={onRemoveFromWishlist}
              isInWishlist={isInWishlist}
            />
          ))
        )}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
