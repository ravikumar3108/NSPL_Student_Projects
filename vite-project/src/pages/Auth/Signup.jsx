import React, { useState } from "react";
import {
    User,
    Mail,
    LockKeyhole,
    Eye,
    EyeOff,
    UserPlus,
} from "lucide-react";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup Data:", formData);

        // Backend API call yaha kar sakte ho
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">

                {/* Signup Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

                    {/* Logo / Heading */}
                    <div className="mb-8 text-center">
                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                            <UserPlus size={25} />
                        </div>

                        <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                            Create Account
                        </h1>

                        <p className="mt-2 text-sm text-slate-500">
                            Create your account to get started
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Full Name
                            </label>

                            <div className="relative">
                                <User
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Email Address
                            </label>

                            <div className="relative">
                                <Mail
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    required
                                    minLength={6}
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                                >
                                    {showPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>

                            <p className="mt-1 text-xs text-slate-400">
                                Password must be at least 6 characters
                            </p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="mb-2 block text-sm font-medium text-slate-700"
                            >
                                Confirm Password
                            </label>

                            <div className="relative">
                                <LockKeyhole
                                    size={19}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                />

                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm your password"
                                    required
                                    className="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(!showConfirmPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff size={19} />
                                    ) : (
                                        <Eye size={19} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Terms */}
                        <label className="flex cursor-pointer items-start gap-2">
                            <input
                                type="checkbox"
                                required
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-slate-900"
                            />

                            <span className="text-sm text-slate-600">
                                I agree to the{" "}
                                <a
                                    href="/terms"
                                    className="font-medium text-slate-900 hover:underline"
                                >
                                    Terms & Conditions
                                </a>
                            </span>
                        </label>

                        {/* Signup Button */}
                        <button
                            type="submit"
                            className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Login Link */}
                    <p className="mt-7 text-center text-sm text-slate-500">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="font-semibold text-slate-900 hover:underline"
                        >
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;