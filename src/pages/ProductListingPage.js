import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "../components/ProductCard";

const ProductListingPage = ({
  addToWishlist,
  isInWishlist,
  data,
  error,
  loading,
  activeHeart,
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
              addToWishlist={addToWishlist}
              isInWishlist={isInWishlist}
              activeHeart={activeHeart}
            />
          ))
        )}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
