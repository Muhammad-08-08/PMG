"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsType } from "./types";
import CardPage from "./CardPage";
import { Button } from "@/components/ui/button"; // ShadCN Button komponenti
import Link from "next/link";

function Products() {
  const [products, setProducts] = useState<ProductsType | null>(null);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    axios
      .get("https://nt.softly.uz/api/front/products", {
        params: {
          page: page,
          limit: 10,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      });
  }, [page]);

  const totalPages = Math.ceil((products?.totalItems ?? 0) / limit);

  return (
    <div>
      {products && <CardPage items={products.items} />}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          <Button
            disabled={page <= 1}
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            disabled={page >= totalPages}
            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

export default Products;
