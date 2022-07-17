import { useState } from "react";
export const AddCategory = ({ onAddCategory }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length > 1) {
        onAddCategory(search.trim());
        setSearch("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        type='text'
        placeholder='Buscar Gifs ...'
        onChange={(e) => setSearch(e.target.value)}
      />

    </form>
  );
};

