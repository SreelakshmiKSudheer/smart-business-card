import React, { useState } from 'react'
import { Palette, Upload, PenTool } from 'lucide-react'
import companyLogo from '../../assets/images/companyLogo.png' 
import tarentoOffice from '../../assets/images/tarento-office.png'
import MapCard from '../../components/molecules/MapCard';
import { company } from '../../data/company';

// Import the atomic and molecular components
import Button from '../../components/atoms/buttons/Button.tsx'; 
import LabelInput from '../../components/molecules/LabelInput';

interface BrandPalette {
  bg: string;
  dominant: string;
  secondary: string;
}

const AdminSettings: React.FC = () => {
  // Read current layout variables to populate initial state so fields don't reset on load
  const getInitialColor = (variableName: string, fallback: string) => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
    return value || fallback;
  };

  const [brandColors, setBrandColors] = useState<BrandPalette>({
    bg: getInitialColor('--bg', '#EFF4FF'),
    dominant: getInitialColor('--dominant', '#006A62'),
    secondary: getInitialColor('--secondary', '#1B2B3A')
  });

  const handleColorChange = (key: keyof BrandPalette, value: string) => {
    let formattedValue = value;
    if (!value.startsWith('#') && value.length <= 6 && value.length > 0) {
      formattedValue = `#${value}`;
    }
    
    setBrandColors(prev => ({
      ...prev,
      [key]: formattedValue
    }));
  };

  // --- THE GLOBAL THEME ENGINE FUNCTION ---
  const applyGlobalTheme = () => {
    const root = document.documentElement;

    // Validate hex codes quickly before running DOM updates
    const hexRegex = /^#[0-9A-F]{6}$/i;
    if (!hexRegex.test(brandColors.bg) || !hexRegex.test(brandColors.dominant) || !hexRegex.test(brandColors.secondary)) {
      alert("Please ensure all colors are valid 6-character HEX codes (e.g., #006A62)");
      return;
    }

    // 1. Instantly update live DOM custom CSS properties
    root.style.setProperty('--bg', brandColors.bg);
    root.style.setProperty('--dominant', brandColors.dominant);
    root.style.setProperty('--secondary', brandColors.secondary);
    
    // Auto-generate dominant-alt color variant (with 80% opacity hex mapping)
    root.style.setProperty('--dominant-alt', `${brandColors.dominant}CC`);

    // 2. Persist configurations into localStorage so themes survive hard page refreshes
    localStorage.setItem('admin-theme-bg', brandColors.bg);
    localStorage.setItem('admin-theme-dominant', brandColors.dominant);
    localStorage.setItem('admin-theme-secondary', brandColors.secondary);
  };

  return (
    <div
      className="min-h-screen w-full font-sans transition-colors duration-200"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="mx-auto flex w-full max-w-none flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-8 xl:px-10">
        <header className="mb-6">
          <h1 className="mb-1 text-2xl font-bold text-[#111827]">Admin Settings</h1>
          <p className="text-sm text-[#64748b]">Manage your organization's global identity and security protocols.</p>
        </header>

        <main className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 rounded-xl border border-solid border-[#e2e8f0] bg-white p-4 sm:p-6 lg:p-8">
            
            {/* Header: Customise Branding */}
            <div className="flex items-center gap-2 text-[#1e293b] font-semibold text-lg">
              <Palette className="h-5 w-5 text-(--dominant)" />
              <h2>Customise Branding</h2>
            </div>

            {/* Logo & Asset Upload Row */}
            <div className="grid grid-cols-1 gap-6 items-center bg-transparent lg:grid-cols-2 lg:gap-8">
              {/* Organization Logo Custom Box */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-lg border border-dashed border-[#cbd5e1] bg-[#f8fafc] p-4 sm:h-36 sm:w-36 lg:h-44 lg:w-44">
                  <img src={companyLogo} alt="Organization Upload Preview" className="max-h-full max-w-full object-contain" />
                  <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#1e293b] rounded-full flex items-center justify-center text-white border-none cursor-pointer">
                    <PenTool className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">Organization Logo</span>
                  <p className="text-xs text-[#94a3b8] m-0 leading-tight">Upload a high-resolution PNG or SVG.<br/>Recommended size 512×512px.</p>
                  <Button 
                    text="Upload Logo"
                    icon={<Upload className="h-3 w-3" />}
                    iconPosition="left"
                    size="sm"
                    className="text-white border-none w-fit mt-1 hover:opacity-95"
                    style={{ backgroundColor: "var(--dominant)" }}
                  />
                </div>
              </div>

              {/* Organization Cover Image block */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-solid border-[#cbd5e1] bg-[#f8fafc] sm:h-40 sm:w-40 lg:h-48 lg:w-48">
                  <img 
                    src={tarentoOffice} 
                    alt="Organization Cover Preview" 
                    className="w-full h-full object-cover" 
                  />
                  <button className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#1e293b] rounded-full flex items-center justify-center text-white border-none cursor-pointer">
                    <PenTool className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider block">Organization Image</span>
                  <p className="text-xs text-[#94a3b8] m-0 leading-tight">Upload a high-resolution PNG or SVG.<br/>Recommended size 512×512px.</p>
                  <Button 
                    text="Upload Image"
                    icon={<Upload className="h-3 w-3" />}
                    iconPosition="left"
                    size="sm"
                    className="text-white border-none w-fit mt-1 hover:opacity-95"
                    style={{ backgroundColor: "var(--dominant)" }}
                  />
                </div>
              </div>
            </div>

            <hr className="border-t border-solid border-[#e2e8f0] my-2" />

            {/* Standard Text Details Section Inputs */}
            <div className="flex flex-col gap-4">
              <LabelInput 
                label={{ text: "Organization Name", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                input={{ type: "text", defaultValue: "Tarento Technologies Pvt. Ltd", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
              />

              <LabelInput 
                label={{ text: "Tagline", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                input={{ type: "text", defaultValue: "Co-Creating a Better Tomorrow", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
              />

              <LabelInput 
                label={{ text: "Organization Details", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                input={{ isTextArea: true, rows: 4, defaultValue: "In a fast paced world, you need an IT Services partner with a proven track record in providing Enterprise, Digital, Data and AI services and solutions. As a Nordic-Indo IT Services company, Tarento has been working with aspiring business leaders for more than a decade.", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium resize-none leading-relaxed" }}
              />
            </div>

            {/* Bottom Form Section: Two-Column Split Grid */}
            <div className="mt-2 grid grid-cols-1 items-start gap-8 xl:grid-cols-[1.4fr_0.9fr]">
              
              {/* Left Side Metadata Inputs & Geolocation Map View */}
              <div className="flex flex-col gap-4">
                <LabelInput 
                  label={{ text: "Industry", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                  input={{ type: "text", defaultValue: "IT Services & Digital Identity", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
                />
                <LabelInput 
                  label={{ text: "Year", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                  input={{ type: "text", defaultValue: "2010", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
                />
                <LabelInput 
                  label={{ text: "Organization Website", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                  input={{ type: "text", defaultValue: "https://www.tarento.com", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
                />
                <LabelInput 
                  label={{ text: "LinkedIn URL", className: "text-[11px] font-bold text-[#64748b] uppercase tracking-wider" }}
                  input={{ type: "text", defaultValue: "https://www.linkedin.com/company/tarento-group", className: "w-full bg-[#f0f4fc] border-none rounded p-3 text-sm text-[#1e293b] outline-none font-medium" }}
                />
                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Location</label>
                  <MapCard embedUrl={company.location.embedUrl} />
                </div>
              </div>

              {/* Right Side Brand Color Scheme Customizer */}
              <div className="flex w-full flex-col gap-5 rounded-xl border border-solid border-[#e2e8f0] bg-white p-4 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-[#1e293b]">
                  <PenTool className="h-4 w-4" />
                  <h3>Custom Brand Palette</h3>
                </div>

                {/* --- INDEPENDENT TWO-WAY COLOR CHANNELS --- */}
                <div className="flex flex-col gap-5">
                  
                  {/* Background Color Picker Element */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Background Color</span>
                    <div className="flex items-center gap-2 bg-[#f8fafc] border border-solid border-slate-200 rounded px-3 py-1.5 focus-within:border-slate-400 transition-colors">
                      <div className="relative w-7 h-7 rounded border border-solid border-gray-300 overflow-hidden shrink-0 cursor-pointer shadow-sm">
                        <input 
                          type="color" 
                          value={brandColors.bg} 
                          onChange={(e) => handleColorChange('bg', e.target.value)}
                          className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer border-none p-0" 
                        />
                      </div>
                      <input 
                        type="text" 
                        value={brandColors.bg} 
                        onChange={(e) => handleColorChange('bg', e.target.value)}
                        maxLength={7}
                        placeholder="#FFFFFF"
                        className="w-full bg-transparent border-none text-xs font-mono font-bold text-slate-700 outline-none uppercase p-1"
                      />
                    </div>
                  </div>

                  {/* Primary Color Picker Element */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Primary Color</span>
                    <div className="flex items-center gap-2 bg-[#f8fafc] border border-solid border-slate-200 rounded px-3 py-1.5 focus-within:border-slate-400 transition-colors">
                      <div className="relative w-7 h-7 rounded border border-solid border-gray-300 overflow-hidden shrink-0 cursor-pointer shadow-sm">
                        <input 
                          type="color" 
                          value={brandColors.dominant} 
                          onChange={(e) => handleColorChange('dominant', e.target.value)}
                          className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer border-none p-0" 
                        />
                      </div>
                      <input 
                        type="text" 
                        value={brandColors.dominant} 
                        onChange={(e) => handleColorChange('dominant', e.target.value)}
                        maxLength={7}
                        placeholder="#FFFFFF"
                        className="w-full bg-transparent border-none text-xs font-mono font-bold text-slate-700 outline-none uppercase p-1"
                      />
                    </div>
                  </div>

                  {/* Secondary Color Picker Element */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider">Secondary Color</span>
                    <div className="flex items-center gap-2 bg-[#f8fafc] border border-solid border-slate-200 rounded px-3 py-1.5 focus-within:border-slate-400 transition-colors">
                      <div className="relative w-7 h-7 rounded border border-solid border-gray-300 overflow-hidden shrink-0 cursor-pointer shadow-sm">
                        <input 
                          type="color" 
                          value={brandColors.secondary} 
                          onChange={(e) => handleColorChange('secondary', e.target.value)}
                          className="absolute inset-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 cursor-pointer border-none p-0" 
                        />
                      </div>
                      <input 
                        type="text" 
                        value={brandColors.secondary} 
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        maxLength={7}
                        placeholder="#FFFFFF"
                        className="w-full bg-transparent border-none text-xs font-mono font-bold text-slate-700 outline-none uppercase p-1"
                      />
                    </div>
                  </div>

                </div>

                {/* Apply Palette CTA */}
                <Button 
                  text="Apply Changes"
                  fullWidth={true}
                  className="bg-dominant text-white text-sm font-semibold py-2.5 border-none hover:bg-opacity-95 transition-colors mt-2"
                  onClick={applyGlobalTheme}
                />
              </div>
            </div>

            {/* Bottom Absolute Master Save Trigger */}
            <div className="mt-4 flex justify-end">
              <Button 
                text="Save Changes"
                onClick={applyGlobalTheme}
                className="bg-dominant text-white text-sm font-semibold px-6 py-2 border-none hover:bg-opacity-95 transition-opacity"
              />
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminSettings;