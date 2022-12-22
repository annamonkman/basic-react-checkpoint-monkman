import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyledPlp } from "./styles/Plp.styled";
import ProductCard from "../components/ProductCard";

const ProductListingPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <StyledPlp>
      <p>
        Number of products: <span>{String(data.length ?? 0)}</span>
      </p>
      <div className="grid">
        {error ? (
          <p>Error</p>
        ) : loading ? (
          <p>loading</p>
        ) : (
          data.map((product, index) => <ProductCard key={index} {...product} />)
        )}
      </div>
    </StyledPlp>
  );
};

export default ProductListingPage;
