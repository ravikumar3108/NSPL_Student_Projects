import React from 'react'
import {
    Plus,
} from "lucide-react";

function BoxGrid({ data }) {
    console.log(data)
    return (
        <>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        {data?.pagename}
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        {data?.description}
                    </p>
                </div>

                {data?.pagename == "Products" ? <button
                    className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                    <Plus size={18} />
                    {data?.buttonname}
                </button> : ""}
            </div>

            {/* Statistics */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard title={data?.box1}
                // value={products?.length} 
                />

                <StatCard
                    title={data?.box2}
                // value={products.filter((p) => p.stock > 0).length}
                />

                <StatCard
                    title={data?.box3}
                // value={products.filter((p) => p.stock === 0).length}
                />
            </div>
        </>
    )
}

export default BoxGrid


function StatCard({ title, value }) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-800">
                {value}
            </h2>
        </div>
    );
}