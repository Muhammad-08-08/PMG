"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesType } from "./types";

function Categories() {
  const [categories, setCategories] = useState<CategoriesType>();

  useEffect(() => {
    axios.get("https://nt.softly.uz/api/public/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="flex justify-between px-10 py-5 select-none">
      {categories?.map((item) => {
        return (
          <div key={item.id}>
            <p className="cursor-pointer">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
