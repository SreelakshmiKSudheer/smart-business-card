import React from 'react'

interface DashboardMastheadProps {
  adminName?: string;
  description?: string;
}

const DashboardMasthead: React.FC<DashboardMastheadProps> = ({
  adminName = "Admin",
  description = "Manage your organization's digital identity and track active employee credentials across all business lines."
}) => {
  return (
    <div className="bg-[#051625] rounded-xl p-10 text-white">
      <h1 className="text-3xl font-semibold mb-2">Welcome back, {adminName}.</h1>
      <p className="text-base text-[--dominant-alt] max-w-[600px] leading-normal">
        {description}
      </p>
    </div>
  )
}

export default DashboardMasthead