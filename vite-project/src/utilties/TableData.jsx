import React, { useState } from 'react'
import {
    Search,
    Plus,
    Pencil,
    Trash2,
    Eye,
} from "lucide-react";





function TableData({ Productdata }) {

    return (
        <>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                {/* Search */}
                <div className="border-b border-slate-200 p-4">
                    <div className="relative max-w-md">
                        <Search
                            size={18}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            placeholder="Search products..."
                            // value={search}
                            // onChange={(e) => setSearch(e.target.value)}
                            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                        />
                    </div>
                </div>

                {/* Responsive Table */}
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[750px] text-left">
                        <thead className="bg-slate-50">
                            <tr>
                                {[
                                    "Product",
                                    "Category",
                                    "Price",
                                    "Stock",
                                    "Status",
                                    "Actions",
                                ].map((heading) => (
                                    <th
                                        key={heading}
                                        className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500"
                                    >
                                        {heading}
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-100">
                            {Productdata && Productdata.map((product) => (
                                <tr
                                    key={product.id}
                                    className="transition hover:bg-slate-50"
                                >
                                    {/* Product */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-12 w-12 rounded-xl border border-slate-100 object-cover"
                                            />

                                            <div>
                                                <p className="font-semibold text-slate-800">
                                                    {product.name}
                                                </p>
                                                <p className="mt-1 text-xs text-slate-400">
                                                    ID: #{product.id}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Category */}
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {product.category}
                                    </td>

                                    {/* Price */}
                                    <td className="px-6 py-4 text-sm font-semibold text-slate-800">
                                        ₹{product.price.toLocaleString("en-IN")}
                                    </td>

                                    {/* Stock */}
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {product.stock} units
                                    </td>

                                    {/* Status */}
                                    <td className="px-6 py-4">
                                        <span
                                            className={`rounded-full px-3 py-1 text-xs font-medium ${product.stock === 0
                                                ? "bg-red-50 text-red-600"
                                                : product.stock < 10
                                                    ? "bg-amber-50 text-amber-600"
                                                    : "bg-emerald-50 text-emerald-600"
                                                }`}
                                        >
                                            {product.stock === 0
                                                ? "Out of Stock"
                                                : product.stock < 10
                                                    ? "Low Stock"
                                                    : "In Stock"}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <button
                                                title="View product"
                                                onClick={() =>
                                                    window.alert(
                                                        `${product.name}\nPrice: ₹${product.price}\nStock: ${product.stock}`
                                                    )
                                                }
                                                className="rounded-lg p-2 text-slate-500 transition hover:bg-indigo-50 hover:text-indigo-600"
                                            >
                                                <Eye size={17} />
                                            </button>

                                            <button
                                                title="Edit product"
                                                // onClick={() => handleEdit(product)}
                                                className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                <Pencil size={17} />
                                            </button>

                                            <button
                                                title="Delete product"
                                                // onClick={() => handleDelete(product.id)}
                                                className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                                            >
                                                <Trash2 size={17} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {Productdata.length === 0 && (
                                <tr>
                                    <td
                                        colSpan={6}
                                        className="px-6 py-12 text-center text-sm text-slate-500"
                                    >
                                        No products found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="border-t border-slate-200 px-6 py-4">
                    <p className="text-sm text-slate-500">
                        Showing {Productdata?.length} of {Productdata?.length} products
                    </p>
                </div>
            </div>
        </>
    )
}

export default TableData
