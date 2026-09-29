import { NavLink } from "react-router-dom";
import {
    Menu,
    Search,
    Settings,
    Bell,
    ChevronDown,
} from "lucide-react";

function Navbar({ setSidebarOpen }) {
    return (
        <header className="sticky top-0 z-30 h-[82px] border-b border-slate-200 bg-white/95 backdrop-blur">
            <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

                {/* =========================
                    Left Side
                ========================= */}
                <div className="flex items-center gap-3 sm:gap-4">

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:hidden"
                    >
                        <Menu size={22} />
                    </button>

                    {/* Desktop Menu */}
                    <button
                        type="button"
                        className="hidden rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 lg:block"
                    >
                        <Menu size={21} />
                    </button>

                    {/* Search */}
                    <div className="hidden w-[260px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 sm:flex">
                        <Search
                            size={18}
                            className="shrink-0 text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Ctrl + K"
                            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                        />
                    </div>
                </div>

                {/* =========================
                    Right Side
                ========================= */}
                <div className="flex items-center gap-1 sm:gap-3">

                    {/* Settings */}
                    <NavLink
                        to="/settings"
                        className="hidden rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 sm:block"
                    >
                        <Settings size={19} />
                    </NavLink>

                    {/* Notifications */}
                    <NavLink
                        to="/notifications"
                        className="relative rounded-lg p-2.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                        <Bell size={19} />

                        {/* Notification Badge */}
                        <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-[9px] font-bold text-white">
                            3
                        </span>
                    </NavLink>

                    {/* =========================
                        User Profile
                    ========================= */}
                    <NavLink
                        to="/profile"
                        className="group ml-1 flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-slate-50 sm:ml-2 sm:px-3"
                    >
                        {/* Avatar */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg ring-2 ring-transparent transition group-hover:ring-blue-100">
                            👨🏻‍💻
                        </div>

                        {/* User Info */}
                        <div className="hidden min-w-0 text-left sm:block">
                            <p className="max-w-[120px] truncate text-sm font-semibold text-slate-800">
                                John Smith
                            </p>

                            <p className="text-[11px] text-slate-500">
                                Administrator
                            </p>
                        </div>

                        {/* Arrow */}
                        <ChevronDown
                            size={16}
                            className="hidden text-slate-400 transition group-hover:text-slate-600 sm:block"
                        />
                    </NavLink>
                </div>
            </div>
        </header>
    );
}

export default Navbar;