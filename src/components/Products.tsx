"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "./types";
import CardPage from "./CardPage";

function Products() {
  const [products, setProducts] = useState<ProductsType | null>(null);

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/public/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  }, []);

  return <div>{products && <CardPage items={products.items} />}</div>;
}

export default Products;
