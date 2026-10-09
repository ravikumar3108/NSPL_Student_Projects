import { useState } from "react";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Accessories",
    price: 3999,
    stock: 8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    price: 1899,
    stock: 0,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100",
  },
  {
    id: 4,
    name: "Travel Backpack",
    category: "Bags",
    price: 1499,
    stock: 32,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=100",
  },
];

export default function ProductTable() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    const name = window.prompt("Enter product name:");
    if (!name?.trim()) return;

    const price = Number(window.prompt("Enter product price:", "999"));
    if (!Number.isFinite(price) || price < 0) return;

    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: name.trim(),
        category: "General",
        price,
        stock: 0,
        image: "https://placehold.co/100x100?text=Product",
      },
    ]);
  };

  const handleEdit = (product) => {
    const name = window.prompt("Enter product name:", product.name);

    if (!name?.trim()) return;

    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, name: name.trim() }
          : item
      )
    );
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;

    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
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
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>

        {/* Statistics */}
        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard title="Total Products" value={products.length} />

          <StatCard
            title="In Stock"
            value={products.filter((p) => p.stock > 0).length}
          />

          <StatCard
            title="Out of Stock"
            value={products.filter((p) => p.stock === 0).length}
          />
        </div>

        {/* Table */}
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                {filteredProducts.map((product) => (
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
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          product.stock === 0
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
                          onClick={() => handleEdit(product)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Pencil size={17} />
                        </button>

                        <button
                          title="Delete product"
                          onClick={() => handleDelete(product.id)}
                          className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredProducts.length === 0 && (
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
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

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