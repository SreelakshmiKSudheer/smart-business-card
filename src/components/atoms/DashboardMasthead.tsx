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
    <div className="rounded-xl bg-[#051625] p-6 text-white sm:p-8 lg:p-10">
      <h1 className="text-3xl font-semibold mb-2">Welcome back, {adminName}.</h1>
      <p className="max-w-[37.5rem] text-base leading-normal text-[--dominant-alt]">
        {description}
      </p>
    </div>
  )
}

export default DashboardMasthead