import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "./ProductCard";

const ProductListingPage = ({
  addToWishlist,
  data,
  isError,
  isLoading,
  activeTab = "",
  active,
}) => {
  if (isLoading) {
    return (
      <StyledPlp>
        <p>loading...</p>
      </StyledPlp>
    );
  }
  if (isError) {
    return (
      <StyledPlp>
        <p>Error</p>
      </StyledPlp>
    );
  }

  return (
    <StyledPlp>
      <div className="grid">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            product={product}
            addToWishlist={addToWishlist}
            activeTab={activeTab}
            active={active}
            name={product.id}
          />
        ))}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
