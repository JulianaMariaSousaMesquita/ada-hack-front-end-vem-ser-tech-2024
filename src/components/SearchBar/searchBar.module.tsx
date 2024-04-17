import React from "react";
import { IoSearch } from "react-icons/io5";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex w-64 justify-center items-center my-10 border border-gray-300 rounded-md bg-gray-700 transition duration-300 focus-within:border-white">
      <IoSearch className="ml-4" />
      <input
        type="text"
        placeholder="Pesquisar cursos..."
        className="border-none bg-transparent px-4 py-2 text-white focus:outline-none focus:bg-transparent"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
