import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="mx-auto max-w-[1600px]">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-400 px-6 py-8 text-white shadow-sm sm:px-8">
        {/* Background shapes */}
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[45px] border-white/10" />

        <div className="absolute -right-5 top-10 h-56 w-56 rounded-full border-[30px] border-white/10" />

        <div className="relative z-10 max-w-[650px]">
          <p className="text-2xl font-bold sm:text-3xl">
            Explore Your Dashboard
          </p>

          <p className="mt-3 max-w-xl text-sm leading-6 text-blue-50 sm:text-base">
            Manage your business, monitor your performance,
            and explore useful insights from one place.
          </p>

          <button className="mt-6 rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-blue-600">
            Explore Dashboard
          </button>
        </div>

        {/* Rocket */}
        <div className="absolute bottom-5 right-10 hidden text-7xl md:block">
          🚀
        </div>
      </section>

      {/* Cards */}
      <section className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <DashboardCard
          title="All Earnings"
          value="$3,020"
          percentage="30.6%"
          type="earnings"
        />

        <DashboardCard
          title="Page Views"
          value="290K+"
          percentage="30.6%"
          type="views"
        />

        <DashboardCard
          title="Total Task"
          value="839"
          percentage="New"
          type="tasks"
        />

        <DashboardCard
          title="Downloads"
          value="2,067"
          percentage="30.6%"
          type="downloads"
        />
      </section>

      {/* Main content */}
      <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        {/* Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Repeat customer rate
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Customer activity overview
              </p>
            </div>

            <button className="text-slate-400">
              •••
            </button>
          </div>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <span className="text-3xl font-bold text-slate-800">
                5.44%
              </span>

              <span className="ml-2 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                +2.6%
              </span>
            </div>
          </div>

          {/* Fake chart */}
          <div className="relative mt-8 h-[260px]">
            <div className="absolute inset-0 flex flex-col justify-between">
              {[90, 70, 50, 30, 10].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 text-xs text-slate-400">
                    {item}
                  </span>

                  <div className="h-px flex-1 border-t border-dashed border-slate-200" />
                </div>
              ))}
            </div>

            {/* chart line */}
            <svg
              viewBox="0 0 800 240"
              className="absolute inset-5 h-[220px] w-[calc(100%-40px)] overflow-visible"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M0 190
                  C60 175, 80 160, 130 170
                  C180 180, 210 120, 260 135
                  C310 150, 350 100, 400 120
                  C450 140, 480 85, 530 100
                  C580 115, 610 60, 660 85
                  C710 110, 740 45, 800 65
                "
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Project */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-6">
            <h2 className="font-bold text-slate-800">
              Project - Dashboard
            </h2>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Release v1.2.0
              </span>

              <span className="text-sm font-semibold text-slate-700">
                70%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full w-[70%] rounded-full bg-blue-500" />
            </div>

            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Horizontal Layout
                </span>

                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs">
                  2
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Authentication
                </span>

                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs">
                  5
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Components
                </span>

                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs">
                  12
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Documentation
                </span>

                <span className="rounded-md bg-slate-100 px-2 py-1 text-xs">
                  8
                </span>
              </div>
            </div>

            <button className="mt-8 w-full rounded-xl bg-blue-50 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-100">
              View Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;