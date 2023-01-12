import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "../components/ProductCard";

const ProductListingPage = ({
  addToWishlist,
  data,
  error,
  loading,
  activeTab = "",
  isActive,
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
              activeTab={activeTab}
              isActive={isActive}
              name={product.id}
            />
          ))
        )}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
