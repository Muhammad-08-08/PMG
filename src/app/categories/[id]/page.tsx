"use client";

import CardPage from "@/components/CardPage";
import { ProductsType } from "@/components/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const { id } = useParams();
  const [categories, setCategories] = useState<ProductsType>();
  useEffect(() => {
    axios
      .get(`https://nt.softly.uz/api/front/products?page=${id}&limit=10`)
      .then((response) => {
        setCategories(response.data);
      });
  }, [id]);

  if (!categories?.items) {
    return (
      <div className="text-center text-gray-600 text-xl font-semibold bg-white p-6 rounded-lg">
        Loading...
      </div>
    );
  } else if (categories.items.length === 0) {
    return (
      <div className="text-center text-gray-600 text-xl font-semibold bg-white p-6 rounded-lg">
        {"❌ Ma'lumot topilmadi"}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      {categories && <CardPage items={categories?.items} />}
    </div>
  );
}

export default Page;
