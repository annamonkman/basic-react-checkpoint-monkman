import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "../components/ProductCard";

const ProductListingPage = ({
  addToWishlist,
  isInWishlist,
  data,
  error,
  loading,
  cssClass,
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
              cssClass={cssClass}
            />
          ))
        )}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
