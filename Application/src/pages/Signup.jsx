import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    ArrowRight,
    Truck,
    ShieldCheck,
    RotateCcw,
} from "lucide-react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import signupleftimg from "../Images/signupleftimg.png";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
function Signup() {
    const [allData, setAllData] = useState({});
    console.log(allData);

    function getvalue(e) {
        setAllData({
            ...allData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(allData);
            const res = await axios.post(
                "http://localhost:5000/api/user/signup",
                allData,
            );
            console.log(res);
            console.log(res);
            // if (res.data.staus) {
            //     toast.success(res.data.messsage);
            // } else {
            //     toast.error(res.data.messsage);
            // }
        } catch (error) {
            toast.error("something went wrong");
            console.log(error);
        }
    }

    return (
        <>
            <Toaster />
            <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4 lg:p-10">
                <div className="w-full max-w-7xl bg-white rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2">
                    <div className="hidden lg:flex relative bg-gradient-to-br from-green-50 via-white to-lime-50">
                        {/* Background Blur */}

                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
                            {/* Logo */}

                            <div className="flex items-center gap-3">
                                <img
                                    src={logo}
                                    alt="Organic"
                                    className="w-20 h-20 object-contain"
                                />

                                <div>
                                    <h1 className="text-3xl font-bold text-green-700">Organic</h1>

                                    <p className="text-slate-500 text-sm">
                                        Fresh • Healthy • Natural
                                    </p>
                                </div>
                            </div>

                            {/* Heading */}

                            <div>
                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    100% Organic Foods
                                </span>

                                <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mt-6">
                                    Eat Fresh.
                                    <br />
                                    Live Healthy.
                                </h2>

                                <p className="mt-6 text-slate-600 leading-8 max-w-md">
                                    Fresh vegetables, fruits and organic groceries delivered
                                    directly from local farms to your doorstep.
                                </p>
                            </div>

                            {/* Illustration */}

                            <div className="flex justify-center">
                                <img src={signupleftimg} alt="Organic" className="w-[430px]" />
                            </div>

                            {/* Features */}

                            <div className="grid grid-cols-3 gap-5">
                                <div className="bg-white rounded-2xl p-5 shadow">
                                    🌿
                                    <h4 className="font-bold mt-3">Farm Fresh</h4>
                                    <p className="text-sm text-slate-500 mt-2">
                                        Directly from farms
                                    </p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow">
                                    🚚
                                    <h4 className="font-bold mt-3">Fast Delivery</h4>
                                    <p className="text-sm text-slate-500 mt-2">Within 24 Hours</p>
                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow">
                                    🥬
                                    <h4 className="font-bold mt-3">100% Natural</h4>
                                    <p className="text-sm text-slate-500 mt-2">No Chemicals</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}

                    <div className="flex items-center justify-center p-8 lg:p-16 bg-white">
                        <div className="w-full max-w-md">
                            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                🌿 Welcome to Organic
                            </span>

                            <h2 className="text-4xl font-bold text-slate-900 mt-5">
                                Create Your Account
                            </h2>

                            <p className="text-slate-500 mt-3 leading-7">
                                Join Organic today and enjoy fresh fruits, vegetables and
                                healthy groceries delivered right to your doorstep.
                            </p>

                            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                                {/* Full Name */}

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">
                                        <User size={20} className="text-green-600" />

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Email */}

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">
                                        <Mail size={20} className="text-green-600" />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Phone Number
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">
                                        <Phone size={20} className="text-green-600" />

                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="+91 9876543210"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />
                                    </div>
                                </div>

                                {/* Password */}

                                <div>
                                    <label className="text-sm font-semibold text-slate-700">
                                        Password
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">
                                        <Lock size={20} className="text-green-600" />

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="********"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />

                                        <Eye
                                            className="text-slate-400 hover:text-green-600 cursor-pointer"
                                            size={20}
                                        />
                                    </div>
                                </div>

                                {/* Checkbox */}

                                <label className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1 accent-green-600" />

                                    <span className="text-sm text-slate-600">
                                        I agree to the
                                        <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                                            {" "}
                                            Terms & Conditions
                                        </span>{" "}
                                        and{" "}
                                        <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                                            Privacy Policy
                                        </span>
                                    </span>
                                </label>

                                {/* Button */}

                                <button className="w-full h-14 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg">
                                    Join Organic
                                    <ArrowRight size={18} />
                                </button>
                            </form>

                            {/* Divider */}

                            <div className="my-8 flex items-center gap-4">
                                <div className="flex-1 h-px bg-slate-200"></div>

                                <span className="text-sm text-slate-400">or continue with</span>

                                <div className="flex-1 h-px bg-slate-200"></div>
                            </div>

                            {/* Google */}

                            <button className="w-full h-14 rounded-xl border border-slate-300 hover:border-green-500 hover:bg-green-50 transition flex items-center justify-center gap-3 font-medium">
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Continue with Google
                            </button>

                            {/* Footer */}

                            <p className="mt-8 text-center text-slate-600">
                                Already have an account?
                                <Link to={"/login"}>
                                    <span className="ml-2 text-green-700 font-semibold cursor-pointer hover:underline">
                                        Login
                                    </span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
