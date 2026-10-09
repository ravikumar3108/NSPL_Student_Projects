import React from 'react'
import {
    Plus,
} from "lucide-react";

function BoxGrid() {
    return (
        <>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">
                        Products
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Manage your products and inventory.
                    </p>
                </div>

                <button
                    // onClick={handleAdd}
                    className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                    <Plus size={18} />
                    Add Product
                </button>
            </div>

            {/* Statistics */}
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <StatCard title="Total Products"
                // value={products?.length} 
                />

                <StatCard
                    title="In Stock"
                // value={products.filter((p) => p.stock > 0).length}
                />

                <StatCard
                    title="Out of Stock"
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