import MetricCard from "../molecules/MetricCard";
import AreaChart from "../atoms/graphs/AreaChart";

import {
  BarChart3,
  CalendarDays,
  Calendar,
} from "lucide-react";

export default function AnalyticsCard() {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
      "
    >
      {/* Heading */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Scan Analytics
        </h2>

        <p className="mt-2 text-slate-500">
          Track your digital business card engagement.
        </p>

      </div>

      {/* Metrics */}

      <div
        className="
          mb-8

          flex
          flex-wrap

          gap-5
        "
      >
        <MetricCard
          title="Total Scans"
          value="184"
          icon={<BarChart3 size={22} />}
          iconBg="bg-emerald-100"
          iconColor="text-emerald-700"
        />

        <MetricCard
          title="Today's Scans"
          value="12"
          icon={<Calendar size={22} />}
          iconBg="bg-blue-100"
          iconColor="text-blue-700"
        />

        <MetricCard
          title="This Week"
          value="38"
          icon={<CalendarDays size={22} />}
          iconBg="bg-orange-100"
          iconColor="text-orange-700"
        />
      </div>

      {/* Chart */}

      <div
        className="
          rounded-2xl

          border

          border-slate-200

          bg-white

          p-6
        "
      >
        <AreaChart />
      </div>

    </section>
  );
}