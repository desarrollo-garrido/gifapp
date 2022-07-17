import { useState } from "react";
import { AddCategory, GifGrid }  from "./components";

export const GifApp = () => {
  const [categories, setCategories] = useState(['hot']);

  const onAddCategory = (newCategory) => {
    if (!categories.includes(newCategory))
      setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onAddCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* card gif item */}
    </>
  );
};

