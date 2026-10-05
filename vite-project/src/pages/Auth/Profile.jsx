import React, { useEffect, useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    CalendarDays,
    Edit3,
    Save,
    X,
    LogOut,
    ShieldCheck,
    Package,
} from "lucide-react";
import api from "../../Api/Api";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);

    const [user, setUser] = useState(null);

    const [formData, setFormData] = useState(user);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleEdit = () => {
        setFormData(user);
        setIsEditing(true);
    };

    const handleCancel = () => {
        setFormData(user);
        setIsEditing(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        setUser(formData);
        setIsEditing(false);

        console.log("Updated Profile:", formData);
    };

    const handleLogout = () => {
        localStorage.removeItem("organictoken");

        // Navigate to login if using React Router
        window.location.href = "/login";
    };


    const handleFetchProfile = async () => {
        const res = await api.get("/admin/profile")
        // console.log(res)
        setUser(res.data.data)
        localStorage.setItem("adminorganicUser", JSON.stringify(res.data.data))
    }
    useEffect(() => {
        handleFetchProfile()
    }, [])



    return (
        <div className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">

                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                        My Profile
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your personal information and account settings
                    </p>
                </div>

                {/* Profile Header Card */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                    {/* Cover */}
                    <div className="h-32 bg-slate-900 sm:h-40"></div>

                    {/* Profile Info */}
                    <div className="relative px-5 pb-6 sm:px-8">

                        {/* Avatar */}
                        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

                            <div className="flex items-end gap-4">
                                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-slate-200 text-3xl font-bold text-slate-700 shadow-md sm:h-28 sm:w-28">
                                    RK
                                </div>

                                <div className="pb-1">
                                    <h2 className="text-xl font-bold text-slate-900">
                                        {user?.name}
                                    </h2>

                                    <p className="text-sm text-slate-500">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            {/* Edit Button */}
                            {!isEditing && (
                                <button
                                    onClick={handleEdit}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                                >
                                    <Edit3 size={17} />
                                    Edit Profile
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-6 grid gap-6 lg:grid-cols-3">

                    {/* Personal Information */}
                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">

                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        Personal Information
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Your basic account information
                                    </p>
                                </div>

                                <User className="text-slate-400" size={22} />
                            </div>

                            {isEditing ? (
                                <form onSubmit={handleSave} className="space-y-5">

                                    {/* Name */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Full Name
                                        </label>

                                        <div className="relative">
                                            <User
                                                size={18}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Email Address
                                        </label>

                                        <div className="relative">
                                            <Mail
                                                size={18}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData?.email}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Phone Number
                                        </label>

                                        <div className="relative">
                                            <Phone
                                                size={18}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData?.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                            />
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-slate-700">
                                            Address
                                        </label>

                                        <div className="relative">
                                            <MapPin
                                                size={18}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                type="text"
                                                name="address"
                                                value={formData?.address}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                            />
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">

                                        <button
                                            type="button"
                                            onClick={handleCancel}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                        >
                                            <X size={17} />
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                                        >
                                            <Save size={17} />
                                            Save Changes
                                        </button>

                                    </div>
                                </form>
                            ) : (
                                <div className="grid gap-5 sm:grid-cols-2">

                                    {/* Name */}
                                    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                                        <User className="mt-0.5 text-slate-500" size={19} />

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Full Name
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                {user?.name}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                                        <Mail className="mt-0.5 text-slate-500" size={19} />

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Email Address
                                            </p>

                                            <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                                                {user?.email}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                                        <Phone className="mt-0.5 text-slate-500" size={19} />

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Phone Number
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                {user?.phone}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
                                        <MapPin className="mt-0.5 text-slate-500" size={19} />

                                        <div>
                                            <p className="text-xs font-medium text-slate-400">
                                                Address
                                            </p>

                                            <p className="mt-1 text-sm font-semibold text-slate-800">
                                                {user?.address}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="space-y-6">

                        {/* Account Info */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <h3 className="mb-5 text-lg font-bold text-slate-900">
                                Account
                            </h3>

                            <div className="space-y-4">

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                                        <CalendarDays
                                            size={19}
                                            className="text-slate-600"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Member Since
                                        </p>

                                        <p className="text-sm font-semibold text-slate-800">
                                            {user?.joined}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                                        <ShieldCheck
                                            size={19}
                                            className="text-slate-600"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400">
                                            Account Status
                                        </p>

                                        <p className="text-sm font-semibold text-green-600">
                                            Active
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Orders */}
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                                    <Package size={20} className="text-slate-700" />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        My Orders
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        View your order history
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => (window.location.href = "/orders")}
                                className="mt-5 w-full rounded-xl border border-slate-300 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                            >
                                View Orders
                            </button>
                        </div>

                        {/* Logout */}
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;