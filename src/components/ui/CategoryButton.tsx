import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CategoryButtonProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
    >
      <Icon className="mr-2" />
      {label}
    </button>
  );
};

export default CategoryButton;