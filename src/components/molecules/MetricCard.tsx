import React from 'react';

type MetricCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const MetricCard = ({ title, value, icon, iconBg, iconColor }: MetricCardProps ) => {
  return (
    <div className="bg-(--card) rounded-xl border border-solid border-[#e2e8f0] flex w-full items-center gap-4 p-5 sm:flex-1 sm:min-w-[16rem] sm:p-6 lg:max-w-[22rem]">
      <div className={`w-11 h-11 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <span className="text-[0.8rem] text-[#64748b] block font-medium mb-0.5">{title}</span>
        <strong className="text-xl font-bold text-[#1e293b]">{value}</strong>
      </div>
    </div>
  );
}

export default MetricCard;