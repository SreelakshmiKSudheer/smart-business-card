import React, { useState } from 'react'
import { LayoutGrid, Users, Settings, LogOut, Search, TrendingUp, AlertCircle } from 'lucide-react'
import logoImg from '../../assets/images/logoImg.png' // Adjust the import path to where your image is saved
import companyLogo from '../../assets/images/companyLogo.png' // Adjust the import path to where your image is savedFov
// Define explicit types for strict TSX compliance
interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('overview');

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid size={18} /> },
    { id: 'employees', label: 'Employees', icon: <Users size={18} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f4f6fa] font-sans">
      
      {/* ================= SIDEBAR NAVIGATION ================= */}
      <aside className="w-[250px] bg-[#f0f4fc] flex flex-col py-6 border-r border-solid border-[#e2e8f0]">
        
        {/* SBC Logo Brand Section */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded w-fit">
            <img src={logoImg} alt="SBC Logo" className="w-7 h-7 object-contain" />
            <span className="text-fb font-bold text-[#111827]">SBC</span>
          </div>
        </div>

        <div className="px-6 mb-8">
          <div className="h-8 w-36 flex items-center">
            {/* Swap the src attribute with your dedicated Tarento logo image file later */}
            <img src={companyLogo} alt="Company Logo" className="h-full w-full object-contain object-left" />
          </div>
        </div>


        {/* Tab Selection Navigation */}
        <nav className="flex-grow flex flex-col gap-1 px-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-md border-none text-left cursor-pointer text-sm transition-all duration-200
                  ${isActive 
                    ? 'bg-[var(--dominant)] text-white font-semibold' 
                    : 'bg-transparent text-[#64748b] font-medium hover:bg-gray-100'
                  }`}
              >
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer Logout button */}
        <div className="px-4 border-t border-solid border-[#cbd5e1] pt-4">
          <button className="flex items-center gap-3 px-4 py-2.5 w-full bg-transparent border-none text-[#64748b] font-medium cursor-pointer text-left text-sm">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ================= MAIN INTERFACE BODY ================= */}
      <div className="flex-grow flex flex-col">
        
        {/* TOP SYSTEM ACCESS BAR */}
        <header className="h-[70px] flex items-center justify-between px-10 border-b border-solid border-[#e2e8f0]">
          <div className="relative w-[300px]">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-9 pr-3 py-2 rounded-get border border-solid border-[#cbd5e1] bg-[#f8fafc] text-sm outline-none"
            />
          </div>
          <div>
            {/* Profile Avatar Container */}
            <div className="w-9 h-9 rounded border border-solid border-[#cbd5e1] overflow-hidden">
              <div className="w-full h-full bg-[#cbd5e1]"></div>
            </div>
          </div>
        </header>

        {/* CONTENT ROW/GRID LAYOUT CONTAINER */}
        <main className="p-10 flex-grow overflow-y-auto flex flex-col gap-6">
          
          {/* Welcome Dashboard Masthead */}
          <div className="bg-[#051625] rounded-xl p-10 text-white">
            <h1 className="text-3xl font-semibold mb-2">Welcome back, Admin.</h1>
            <p className="text-base text-[--dominant-alt] max-w-[600px] leading-normal">
              Manage your organization's digital identity and track active employee credentials across all business lines.
            </p>
          </div>

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
            
            {/* Core Info Details Card */}
            <div className="bg-white rounded-xl p-8 border border-solid border-[#e2e8f0] flex gap-6">
              <div className="w-[200px] h-[150px] rounded-lg overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-[#e2e8f0]"></div>
              </div>
              <div className="flex flex-col justify-between">
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
                    <strong className="text-sm text-[#334155]">2012</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn & Identity Matrix Asset Placeholder Card */}
            <div className="bg-white rounded-xl p-8 border border-solid border-[#e2e8f0] flex flex-col items-center gap-6 justify-center h-full min-h-[230px]">
              {/* LinkedIn Integration block */}
              <div className="w-12 h-12 bg-[#0077b5] rounded-lg flex items-center justify-center text-white text-2xl font-bold">in</div>
              <div className="flex items-center gap-1.5 border-t border-solid border-[#f1f5f9] pt-4 w-full justify-center">
                <div className="w-4 h-4 bg-[#0d9488] rotate-45"></div>
                <span className="text-[0.85rem] font-semibold text-[#64748b] tracking-[0.5px]">TARENTO</span>
              </div>
            </div>

          </div>

          {/* Regional Smart Card Office Geolocation Map Section Container */}
          <div className="bg-white rounded-xl p-4 border border-solid border-[#e2e8f0]">
            <div className="w-full h-[220px] rounded-lg bg-[#0f172a] relative overflow-hidden">
              <div className="w-full h-full opacity-40 bg-[radial-gradient(circle_at_40%_50%,#3b82f6_0%,transparent_60%)]"></div>
              <div className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-3 h-3 bg-[#ef4444] rounded-full border-2 border-solid border-white"></div>
                <span className="bg-[#1e293b] text-white text-[0.7rem] px-1.5 py-0.5 rounded mt-1 whitespace-nowrap">Tarento Technologies Pvt Limited</span>
              </div>
            </div>
          </div>

        </main>

        {/* SYSTEM BOTTOM LEGAL SUBFOOTER */}
        <footer className="h-[50px] border-t border-solid border-[#e2e8f0] flex items-center justify-between px-10 text-[0.8rem] text-[#64748b] bg-whiteNDA">
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

{/* Helper Functional Subcomponent for the Info Metrics Row */}
const MetricCard: React.FC<MetricCardProps> = ({ title, value, icon, iconBg, iconColor }) => {
  return (
    <div className="bg-white rounded-xl p-5 px-6 border border-solid border-[#e2e8f0] flex-1 min-w-[220px] flex items-center gap-5">
      <div className={`w-11 h-11 rounded-lg ${iconBg} ${iconColor} flex items-center justify-center`}>
        {icon}
      </div>
      <div>
        <span className="text-[0.8rem] text-[#64748b] block font-medium mb-0.5">{title}</span>
        <strong className="text-2xl font-bold text-[#1e293b]">{value}</strong>
      </div>
    </div>
  );
}

export default Dashboard