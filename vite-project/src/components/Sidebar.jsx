import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    BarChart3,
    Wallet,
    Database,
    PieChart,
    GraduationCap,
    Users,
    Settings,
    ChevronDown,
    X,
} from "lucide-react";

const navigation = [
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        name: "Analytics",
        path: "/analytics",
        icon: BarChart3,
    },
    {
        name: "Finance",
        path: "/finance",
        icon: Wallet,
    },
    {
        name: "Data",
        path: "/data",
        icon: Database,
    },
    {
        name: "Charts",
        path: "/charts",
        icon: PieChart,
    },
    {
        name: "Courses",
        path: "/courses",
        icon: GraduationCap,
    },
    {
        name: "Members",
        path: "/members",
        icon: Users,
    },
    {
        name: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

function Sidebar({ open, setOpen }) {
    return (
        <>
            {/* =========================
                Mobile Overlay
            ========================= */}
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-black/30 lg:hidden"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* =========================
                Sidebar
            ========================= */}
            <aside
                className={`
                    fixed left-0 top-0 z-50
                    flex h-screen w-[280px] flex-col
                    border-r border-slate-200
                    bg-white
                    transition-transform duration-300 ease-in-out
                    lg:translate-x-0
                    ${open
                        ? "translate-x-0"
                        : "-translate-x-full"
                    }
                `}
            >
                {/* =========================
                    Logo
                ========================= */}
                <div className="flex h-[82px] shrink-0 items-center justify-between border-b border-slate-100 px-7">
                    <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold tracking-tight text-blue-600">
                            Able
                        </h1>

                        <span className="rounded-md bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-600">
                            PRO
                        </span>
                    </div>

                    {/* Mobile Close */}
                    <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                    >
                        <X size={20} />
                    </button>
                </div>

               
                {/* =========================
                    Navigation
                ========================= */}
                <nav className="mt-7 flex-1 overflow-y-auto px-4 pb-6">
                    <div className="space-y-1">
                        {navigation.map((item) => {
                            const Icon = item.icon;

                            return (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `
                                        group flex items-center gap-3
                                        rounded-lg px-3 py-3
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${isActive
                                            ? "bg-blue-50 text-blue-600"
                                            : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                                        }
                                        `
                                    }
                                >
                                    {({ isActive }) => (
                                        <>
                                            {/* Icon */}
                                            <Icon
                                                size={18}
                                                strokeWidth={
                                                    isActive
                                                        ? 2
                                                        : 1.8
                                                }
                                                className="shrink-0"
                                            />

                                            {/* Name */}
                                            <span className="flex-1">
                                                {item.name}
                                            </span>

                                            {/* Dashboard Badge */}
                                            {item.name ===
                                                "Dashboard" && (
                                                    <span className="rounded-full bg-blue-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                                                        2
                                                    </span>
                                                )}
                                        </>
                                    )}
                                </NavLink>
                            );
                        })}
                    </div>
                </nav>

                {/* =========================
                    Bottom Plan Card
                ========================= */}
                <div className="shrink-0 border-t border-slate-100 p-4">
                    <div className="rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-slate-400">
                                Current plan
                            </p>

                            <span className="text-[10px] font-semibold text-blue-500">
                                72%
                            </span>
                        </div>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            Professional
                        </p>

                        {/* Progress */}
                        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
                            <div className="h-full w-[72%] rounded-full bg-blue-500 transition-all duration-500" />
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;