import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  trend?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon: Icon,
  title,
  value,
  trend,
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600'
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="flex items-center mb-4">
        <div className={`p-3 ${iconBgColor} rounded-lg mr-4`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div>
          <p className="text-gray-600">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          {trend && <p className="text-green-600 text-sm">▲ {trend}</p>}
        </div>
      </div>
    </div>
  );
};

export default MetricCard;