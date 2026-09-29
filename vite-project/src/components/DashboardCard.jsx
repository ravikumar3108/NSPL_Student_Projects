import {
  Wallet,
  FileText,
  CalendarCheck,
  Download,
} from "lucide-react";

const icons = {
  earnings: Wallet,
  views: FileText,
  tasks: CalendarCheck,
  downloads: Download,
};

function DashboardCard({
  title,
  value,
  percentage,
  type,
  positive = true,
}) {
  const Icon = icons[type];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
          <Icon size={20} />
        </div>

        <button className="text-slate-400">
          •••
        </button>
      </div>

      <h3 className="mt-5 text-sm font-medium text-slate-500">
        {title}
      </h3>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl font-bold text-slate-800">
          {value}
        </p>

        <span
          className={`text-xs font-semibold ${
            positive ? "text-green-500" : "text-red-500"
          }`}
        >
          ↗ {percentage}
        </span>
      </div>

      {/* Mini graph */}
      <div className="mt-5 flex h-10 items-end gap-1">
        {[30, 45, 25, 55, 35, 65, 42, 70, 50, 60, 45, 68].map(
          (height, index) => (
            <div
              key={index}
              className="w-full rounded-t bg-blue-400"
              style={{
                height: `${height}%`,
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default DashboardCard;