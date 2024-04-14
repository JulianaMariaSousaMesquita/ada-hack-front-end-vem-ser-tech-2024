import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="flex justify-center items-center my-10">
      <input
        type="text"
        placeholder="Pesquisar cursos..."
        className="border border-gray-300 px-4 py-2 rounded-md"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
