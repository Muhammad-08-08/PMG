"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesType } from "./types";
import Link from "next/link";

function Categories() {
  const [categories, setCategories] = useState<CategoriesType>();

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/front/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="flex gap-7 items-center px-10 py-5 select-none">
      {categories?.map((item) => {
        return (
          <div key={item.id}>
            <Link href={`/categories/${item.id}`}>
              <p className="cursor-pointer">{item.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
