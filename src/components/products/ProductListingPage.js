import { StyledPlp } from "./Plp.styled";
import ProductCard from "./ProductCard";
import useAxios from "../../hooks/useAxios";

const ProductListingPage = () => {
  const { data, isLoading, isError } = useAxios();

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
            item={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            }}
          />
        ))}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
