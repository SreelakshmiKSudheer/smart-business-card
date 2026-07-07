import { Users, Search, TrendingUp, AlertCircle, BarChart3 } from "lucide-react";

import companyLogo from "../../assets/images/companyLogo.png";
import tarentoOffice from "../../assets/images/tarento-office.png";

import DashboardMasthead from "../../components/atoms/DashboardMasthead";
import MetricCard from "../../components/molecules/MetricCard";
import MapCard from "../../components/molecules/MapCard";
import ScanAreaChart from "../../components/atoms/graphs/AreaChart";

import { company } from "../../data/company";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-100">

     <main
  className="
    w-full
    flex
    flex-col
    gap-8
    px-8
    py-8
  "
>

        {/* Dashboard Header */}

        <DashboardMasthead adminName="Admin" />

        {/* Top Metrics */}

        <div className="flex flex-wrap gap-6">

          <MetricCard
            title="Total Employees"
            value="1,284"
            icon={<Users size={20} />}
            iconBg="bg-emerald-100"
            iconColor="text-emerald-700"
          />

          <MetricCard
            title="Review Required"
            value="12"
            icon={<AlertCircle size={20} />}
            iconBg="bg-red-100"
            iconColor="text-red-600"
          />

          <MetricCard
            title="Weekly Scans"
            value="+12.5%"
            icon={<TrendingUp size={20} />}
            iconBg="bg-blue-100"
            iconColor="text-blue-700"
          />

        </div>

        {/* Company Overview */}

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">

          {/* Company Card */}

          <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

            <span className="text-xs font-semibold uppercase tracking-wide text-[var(--dominant)]">
              Co-creating a better tomorrow
            </span>

            <h2 className="mt-2 text-2xl font-bold">
              {company.name}
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              In a fast-paced world, you need an IT services partner with a
              proven track record in Enterprise, Digital, Data and AI
              solutions. Tarento has been enabling businesses with technology
              for more than a decade.
            </p>

            <div className="mt-8 flex gap-12">

              <div>

                <p className="text-xs uppercase text-slate-400">
                  Industry
                </p>

                <h4 className="mt-1 font-semibold">
                  IT Services
                </h4>

              </div>

              <div>

                <p className="text-xs uppercase text-slate-400">
                  Founded
                </p>

                <h4 className="mt-1 font-semibold">
                  2010
                </h4>

              </div>

            </div>

          </section>

          {/* LinkedIn */}

          <section
            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-cover bg-center shadow-sm"
            style={{
              backgroundImage: `url(${tarentoOffice})`,
            }}
          >

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative flex h-full flex-col items-center justify-center gap-6 p-8">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0077b5] text-3xl font-bold text-white">
                in
              </div>

              <div className="w-full border-t border-white/30 pt-5">

                <img
                  src={companyLogo}
                  alt="Company"
                  className="mx-auto h-10 object-contain"
                />

              </div>

            </div>

          </section>

        </div>

        {/* Location */}

        <MapCard embedUrl={company.location.embedUrl} />

        {/* Analytics */}

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="mb-8">

            <div className="flex items-center gap-3">

              <BarChart3
                size={26}
                className="text-[var(--dominant)]"
              />

              <h2 className="text-2xl font-bold">
                Company Scan Analytics
              </h2>

            </div>

            <p className="mt-2 text-slate-500">
              Monitor digital business card engagement across the organization.
            </p>

          </div>

          <div className="mb-8 flex flex-wrap gap-5">

            <MetricCard
              title="Total Scans"
              value="5,284"
              icon={<TrendingUp size={20} />}
              iconBg="bg-emerald-100"
              iconColor="text-emerald-700"
            />

            <MetricCard
              title="Today's Scans"
              value="84"
              icon={<Search size={20} />}
              iconBg="bg-blue-100"
              iconColor="text-blue-700"
            />

            <MetricCard
              title="This Week"
              value="642"
              icon={<Users size={20} />}
              iconBg="bg-orange-100"
              iconColor="text-orange-700"
            />

          </div>

          <div className="rounded-2xl border border-slate-200 p-5">

            <div className="h-[380px]">

              <ScanAreaChart />

            </div>

          </div>

        </section>

      </main>

      <footer className="border-t border-slate-200 bg-white">

        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-8 text-sm text-slate-500">

          <span>
            © 2026 Tarento Technologies. All rights reserved.
          </span>

          <div className="flex gap-6">

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>

            <a href="#">Support</a>

          </div>

        </div>

      </footer>

    </div>
  );
}