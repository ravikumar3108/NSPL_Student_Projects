import React, { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    // API call yaha kar sakte ho
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8">

          {/* Logo / Heading */}
          <div className="text-center mb-8">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white text-xl font-bold">
              L
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Login to your account to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

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
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm font-medium text-slate-900 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

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
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
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
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 accent-slate-900"
                />

                <span className="text-sm text-slate-600">
                  Remember me
                </span>
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Login
            </button>
          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-slate-900 hover:underline"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;