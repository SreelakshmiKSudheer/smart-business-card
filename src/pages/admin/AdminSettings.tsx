import React, { useState } from 'react'
import { LayoutGrid, Users, Settings as SettingsIcon, LogOut, Palette, Upload, PenTool } from 'lucide-react'
import companyLogo from '../../assets/images/companyLogo.png' // Adjust the import path to where your image is saved
import logoImg from '../../assets/images/logoImg.png' // Adjust the import path to where your image is saved
import MapCard from '../../components/molecules/MapCard';
import { company } from '../../data/company';


interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('settings');

  const navItems: NavItem[] = [
    { id: 'overview', label: 'Overview', icon: <LayoutGrid size={18} /> },
    { id: 'employees', label: 'Employees', icon: <Users size={18} /> },
    { id: 'settings', label: 'Settings', icon: <SettingsIcon size={18} /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#f4f6fa] font-sans">
      
      {/* ================= SIDEBAR NAVIGATION ================= */}
      <aside className="w-[250px] bg-[#f0f4fc] flex flex-col py-6 border-r border-solid border-[#e2e8f0]">
        
        {/* SBC Logo Brand Section */}
        <div className="px-6 mb-6">
          <div className="flex items-center gap-3 bg-white px-3 py-2 rounded w-fit">
            <img src={logoImg} alt="SBC Logo" className="w-7 h-7 object-contain" />
            <span className="text-xl font-bold text-[#111827]">SBC</span>
          </div>
        </div>

        {/* Secondary Corporate Brand Logo Section (Replaced text with Image block) */}
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
        
        {/* TOP COMPACT TITLE HEADER */}
        <header className="pt-8 px-10 pb-4">
          <h1 className="text-2xl font-bold text-[#111827] mb-1">Admin Settings</h1>
          <p className="text-sm text-[#64748b]">Manage your organization's global identity and security protocols.</p>
        </header>

        {/* SETTINGS CARD CONTAINER */}
        <main className="px-10 pb-10 flex-grow overflow-y-auto flex flex-col gap-6">
          <div className="bg-white rounded-xl p-8 border border-solid border-[#e2e8f0] flex flex-col gap-6">
            
            {/* Header: Customise Branding */}
            <div className="flex items-center gap-2 text-[#1e293b] font-semibold text-lg">
              <Palette size={20} className="text-[#0d9488]" />
              <h2>Customise Branding</h2>
            </div>

            {/* Logo & Asset Upload Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-transparent">
              
              {/* Organization Logo Custom Box (Replaced text with Image block) */}
              <div className="flex items-center gap-4">
                <div className="relative border border-dashed border-[#cbd5e1] p-4 rounded-lg bg-[#f8fafc] w-[180px] h-[70px] flex items-center justify-center">
                  <img src={companyLogo} alt="Organization Upload Preview" className="max-h-full max-w-full object-contain" />
                  <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#1e293b] rounded-full flex items-center justify-center text-white border-none cursor-pointer">
                    <PenTool size={12} />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">Organization Logo</span>
                  <p className="text-xs text-[#94a3b8] m-0 leading-tight">Upload a high-resolution PNG or SVG.<br/>Recommended size 512×512px.</p>
                  <button className="flex items-center gap-1.5 bg-[#005a5b] text-white text-xs px-3 py-1.5 rounded font-medium border-none cursor-pointer w-fit mt-1">
                    <Upload size={12} />
                    <span>Upload Logo</span>
                  </button>
                </div>
              </div>

              {/* Organization Cover Image block */}
              <div className="flex items-center gap-4">
                <div className="w-[120px] h-[70px] rounded-lg bg-[#cbd5e1] overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-[#cbd5e1]"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">Organization Image</span>
                  <p className="text-xs text-[#94a3b8] m-0 leading-tight">Upload a high-resolution PNG or SVG.<br/>Recommended size 512×512px.</p>
                  <button className="flex items-center gap-1.5 bg-[#005a5b] text-white text-xs px-3 py-1.5 rounded font-medium border-none cursor-pointer w-fit mt-1">
                    <Upload size={12} />
                    <span>Upload Image</span>
                  </button>
                </div>
              </div>

            </div>

            <hr className="border-t border-solid border-[#e2e8f0] my-2" />

            {/* Standard Text Details Section Inputs */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Organization Name</label>
                <input type="text" defaultValue="Tarento Technologies Pvt. Ltd" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Tagline</label>
                <input type="text" defaultValue="Co-Creating a Better Tomorrow" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Organization Details</label>
                <textarea rows={4} defaultValue="In a fast paced world, you need an IT Services partner with a proven track record in providing Enterprise, Digital, Data and AI services and solutions. As a Nordic-Indo IT Services company, Tarento has been working with aspiring business leaders for more than a decade." className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium resize-none leading-relaxed" />
              </div>
            </div>

            {/* Bottom Form Section: Two-Column Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1.1fr] gap-8 items-start mt-2">
              
              {/* Left Side Metadata Inputs & Geolocation Map View */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Industry</label>
                  <input type="text" defaultValue="IT Services & Digital Identity" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Year</label>
                  <input type="text" defaultValue="2012" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Organization Website</label>
                  <input type="text" defaultValue="https://www.tarento.com" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">LinkedIn URL</label>
                  <input type="text" defaultValue="https://www.linkedin.com/company/tarento-group" className="w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" />
                </div>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Location</label>
                  <MapCard embedUrl={company.location.embedUrl} />
                </div>
              </div>

              {/* Right Side Brand Color Scheme Swatch Panel */}
              <div className="bg-white border border-solid border-[#e2e8f0] rounded-xl p-6 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1e293b]">
                  <PenTool size={16} />
                  <h3>Brand Customization</h3>
                </div>

                {/* Color Fields */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Primary Color</span>
                    <div className="flex items-center justify-between bg-[#f0f4fc] rounded px-3 py-2 text-xs font-semibold text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#1B2B3A] rounded"></div>
                        <span>#1B2B3A</span>
                      </div>
                      <div className="w-4 h-4 bg-[#1B2B3A] rounded-[2px]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Background Color</span>
                    <div className="flex items-center justify-between bg-[#f0f4fc] rounded px-3 py-2 text-xs font-semibold text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#1B2B3A] rounded"></div>
                        <span>#1B2B3A</span>
                      </div>
                      <div className="w-4 h-4 bg-[#1B2B3A] rounded-[2px]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Secondary Color 1</span>
                    <div className="flex items-center justify-between bg-[#f0f4fc] rounded px-3 py-2 text-xs font-semibold text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#006A62] rounded"></div>
                        <span>#006A62</span>
                      </div>
                      <div className="w-4 h-4 bg-[#006A62] rounded-[2px]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Secondary Color 2</span>
                    <div className="flex items-center justify-between bg-[#f0f4fc] rounded px-3 py-2 text-xs font-semibold text-[#1e293b]">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#91F0E4] rounded"></div>
                        <span>#91F0E4</span>
                      </div>
                      <div className="w-4 h-4 bg-[#91F0E4] rounded-[2px]"></div>
                    </div>
                  </div>
                </div>

                {/* Sub-Brand Footer Identity Block (Replaced text with Image block) */}
                <div className="flex items-center border-t border-solid border-[#f1f5f9] pt-4 w-full justify-center h-6">
                  <img src="/image_b27523.png" alt="Footer Sub-Brand Logo" className="h-full max-w-full object-contain" />
                </div>

                {/* Apply Palette CTA */}
                <button className="w-full bg-[#051625] text-white text-sm font-semibold py-2.5 rounded border-none cursor-pointer hover:bg-opacity-90 transition-opacity">
                  Apply Changes
                </button>
              </div>

            </div>

            {/* Bottom Absolute Master Save Trigger */}
            <div className="flex justify-end mt-4">
              <button className="bg-[#005a5b] text-white text-sm font-semibold px-6 py-2 rounded border-none cursor-pointer hover:bg-opacity-95 transition-opacity">
                Save Changes
              </button>
            </div>

          </div>
        </main>
      </div>

    </div>
  )
}

export default AdminSettings