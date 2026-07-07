import React, { useState } from 'react'
import { LayoutGrid, Users, Settings, Search, TrendingUp, AlertCircle } from 'lucide-react'
import companyLogo from '../../assets/images/companyLogo.png'
import tarentoOffice from '../../assets/images/tarento-office.png'
import MapCard from '../../components/molecules/MapCard'
import { company } from '../../data/company'
import MetricCard from '../../components/molecules/MetricCard'
import DashboardMasthead from '../../components/atoms/DashboardMasthead' // Adjust import path as needed

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid size={18} /> },
    { id: 'employees', label: 'Employees', icon: <Users size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-full flex min-h-screen bg-[#f4f6fa] font-sans">
      
      {/* ================= MAIN INTERFACE BODY ================= */}
      <div className="flex-grow flex flex-col">
        
        {/* CONTENT ROW/GRID LAYOUT CONTAINER */}
        <main className="p-10 flex-grow overflow-y-auto flex flex-col gap-6">
          
          {/* Reusable Welcome Dashboard Masthead */}
          <DashboardMasthead adminName="Admin" />

          {/* Quick Metrics Flex Cards Row */}
          <div className="flex gap-6 flex-wrap">
            <MetricCard 
              title="Total Employees" 
              value="1,284" 
              icon={<Users size={20} />} 
              iconBg="bg-[#ccfbf1]" 
              iconColor="text-[#0d9488]" 
            />
            <MetricCard 
              title="Review Required" 
              value="12" 
              icon={<AlertCircle size={20} />} 
              iconBg="bg-[#fee2e2]" 
              iconColor="text-[#ef4444]" 
            />
            <MetricCard 
              title="Weekly Scans" 
              value="+12.5%" 
              icon={<TrendingUp size={20} />} 
              iconBg="bg-[#dbeafe]" 
              iconColor="text-[#2563eb]" 
            />
          </div>

          {/* Company Profile Showcase Panel & LinkedIn Widget Row */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 items-start">
            
            {/* Core Info Details Card (Clean Text Layout) */}
            <div className="bg-white rounded-xl p-8 border border-solid border-[#e2e8f0] flex flex-col justify-between min-h-[230px]">
              <div>
                <span className="text-[0.75rem] font-bold text-[#0d9488] tracking-[0.5px] uppercase block mb-1">Co-creating a better tomorrow</span>
                <h2 className="text-xl font-bold text-[#1e293b] mb-2">Tarento Technologies Pvt Ltd</h2>
                <p className="text-sm text-[#64748b] leading-relaxed m-0">
                  In a fast paced world, you need an IT Services partner with a proven track record in providing Enterprise, Digital, Data and AI services and solutions. As a Nordic-Indo IT Services company, Tarento has been working with aspiring business leaders for more than a decade.
                </p>
              </div>
              <div className="flex gap-10 mt-4">
                <div>
                  <span className="text-[0.75rem] text-[#94a3b8] block">Industry</span>
                  <strong className="text-sm text-[#334155]">IT Services & Digital Identity</strong>
                </div>
                <div>
                  <span className="text-[0.75rem] text-[#94a3b8] block">Founded</span>
                  <strong className="text-sm text-[#334155]">2010</strong>
                </div>
              </div>
            </div>

            {/* LinkedIn Card with Office Image Background & Inverted Asset Logo */}
            <div 
              className="relative rounded-xl border border-solid border-[#e2e8f0] overflow-hidden bg-cover bg-center h-full min-h-[230px] flex flex-col items-center justify-center p-8"
              style={{ backgroundImage: `url(${tarentoOffice})` }}
            >
              {/* Brighter overlay backdrop (40% opacity) for high image visibility */}
              <div className="absolute inset-0 bg-[#051625]/40 backdrop-blur-[0.5px]" />

              {/* Foreground content element wrapper */}
              <div className="relative z-10 flex flex-col items-center gap-6 w-full justify-center">
                {/* LinkedIn Integration block */}
                <div className="w-12 h-12 bg-[#0077b5] rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-md">
                  in
                </div>
                
                {/* Unified corporate border element wrapping the high-res image asset */}
                <div className="flex items-center justify-center border-t border-solid border-white/30 pt-4 w-full h-12">
                  <img 
                    src={companyLogo} 
                    alt="Company Logo" 
                    className="h-full max-w-[140px] object-contain" 
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Location Map Card */}
          <MapCard embedUrl={company.location.embedUrl} />
        </main>

        {/* SYSTEM BOTTOM LEGAL SUBFOOTER */}
        <footer className="h-[50px] border-t border-solid border-[#e2e8f0] flex items-center justify-between px-10 text-[0.8rem] text-[#64748b] bg-white">
          <div>
            © 2026 Tarento Technologies. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="text-[#64748b] no-underline">Privacy Policy</a>
            <a href="#terms" className="text-[#64748b] no-underline">Terms of Service</a>
            <a href="#support" className="text-[#64748b] no-underline">Support</a>
          </div>
        </footer>

      </div>
    </div>
  )
}

export default AdminDashboard;