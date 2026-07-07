export default function AnalyticsCard() {
  return (
    <section
      className="
        rounded-3xl
        bg-white
        p-8
        shadow-md
        h-full
      "
    >
      <h2
        className="
          text-2xl
          font-bold
          text-slate-900
        "
      >
        Scan Analytics
      </h2>

      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-6
        "
      >
        <div className="rounded-2xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            Total Scans
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            184
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-100 p-6">
          <p className="text-sm text-slate-500">
            Today
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            12
          </h3>
        </div>
      </div>

      <div
        className="
          mt-8
          flex
          h-[450px]
          items-center
          justify-center
          rounded-2xl
          border-2
          border-dashed
          border-slate-300
          text-slate-400
        "
      >
        Chart Placeholder
      </div>
    </section>
  );
}