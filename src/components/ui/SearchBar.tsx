import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex mb-6">
      <input 
        type="text" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введите ваш вопрос..." 
        className="flex-grow p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button 
        onClick={onSearch}
        className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700"
      >
        Найти
      </button>
    </div>
  );
};

export default SearchBar;