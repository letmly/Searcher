import React from 'react';

interface ProgressBarProps {
  label: string;
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  label, 
  value, 
  color = 'bg-blue-600' 
}) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`${color} h-2 rounded-full`} 
          style={{width: `${value}%`}}
        />
      </div>
    </div>
  );
};

export default ProgressBar;