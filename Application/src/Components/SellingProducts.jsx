import React, { useEffect, useState } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import api from "../api/Api";

function SellingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= GET PRODUCTS =================
  const getProducts = async () => {
    try {
      const response = await api.get("/products/getAllProducts");

      console.log("Products from backend:", response.data);

      setProducts(response.data.data || []);
    } catch (error) {
      console.log("Error fetching products:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ================= ADD TO CART =================
  const handleCart = async (id) => {
    try {
      console.log("Product ID:", id);

      const response = await api.post("/carts/addtocart", {
        _id: id,
      });

      console.log("Added to cart:", response.data);

      alert("Product added to cart!");
    } catch (error) {
      console.log("Add to cart error:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }
    }
  };

  // ================= MORE DETAILS =================
  const handleDetails = (id) => {
    console.log("Product details:", id);

  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================= HEADING ================= */}
        <div className="flex items-center justify-between mb-7 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Best Selling Products
          </h2>

          <button
            type="button"
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              text-xs
              sm:text-sm
              font-medium
              px-4
              sm:px-5
              py-2
              sm:py-2.5
              rounded-md
            "
          >
            View All
          </button>
        </div>

        {/* ================= LOADING ================= */}
        {loading && (
          <div className="text-center py-10 text-gray-500">
            Loading products...
          </div>
        )}

        {/* ================= NO PRODUCTS ================= */}
        {!loading && products.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No products found.
          </div>
        )}

        {/* ================= PRODUCTS ================= */}
        {!loading && products.length > 0 && (
          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-4
              sm:gap-5
              lg:gap-6
            "
          >
            {products.map((item) => {
              const price = Number(item.price || 0);
              const discount = Number(item.discount || 0);

              const discountedPrice =
                price - (price * discount) / 100;

              return (
                <div
                  key={item._id}
                  className="
                    bg-white
                    border
                    border-gray-200
                    rounded-xl
                    overflow-hidden
                    hover:shadow-md
                    transition
                  "
                >

                  {/* ================= IMAGE ================= */}
                  <div
                    className="
                      w-full
                      h-36
                      sm:h-40
                      md:h-44
                      flex
                      items-center
                      justify-center
                      bg-gray-50
                      p-3
                    "
                  >
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.title}
                      className="
                        w-full
                        h-full
                        object-contain
                      "
                    />
                  </div>

                  {/* ================= PRODUCT INFO ================= */}
                  <div className="p-3 sm:p-4">

                    {/* TITLE */}
                    <h3
                      className="
                        text-sm
                        sm:text-base
                        font-semibold
                        text-gray-900
                        line-clamp-2
                        min-h-[40px]
                      "
                    >
                      {item.title}
                    </h3>

                    {/* PRICE */}
                    <div className="flex items-center gap-2 mt-2 flex-wrap">

                      {/* OLD PRICE */}
                      {discount > 0 && (
                        <span
                          className="
                            text-xs
                            sm:text-sm
                            text-gray-400
                            line-through
                          "
                        >
                          ₹{price.toFixed(2)}
                        </span>
                      )}

                      {/* CURRENT PRICE */}
                      <span
                        className="
                          text-base
                          sm:text-lg
                          font-bold
                          text-gray-900
                        "
                      >
                        ₹{discountedPrice.toFixed(2)}
                      </span>

                      {/* DISCOUNT */}
                      {discount > 0 && (
                        <span
                          className="
                            text-[9px]
                            sm:text-[10px]
                            text-green-600
                            font-medium
                          "
                        >
                          {discount}% OFF
                        </span>
                      )}
                    </div>

                    {/* ================= BUTTONS ================= */}
                    <div className="flex flex-col gap-2 mt-4">

                      {/* MORE DETAILS */}
                      <button
                        type="button"
                        onClick={() => handleDetails(item._id)}
                        className="
                          w-full
                          h-9
                          sm:h-10
                          border
                          border-gray-300
                          text-gray-800
                          rounded-md
                          text-xs
                          sm:text-sm
                          font-medium
                          flex
                          items-center
                          justify-center
                          gap-1
                          hover:bg-gray-100
                          transition
                        "
                      >
                        More Details

                        <ArrowRight size={14} />
                      </button>

                      {/* ADD TO CART */}
                      <button
                        type="button"
                        onClick={() => handleCart(item._id)}
                        className="
                          w-full
                          h-9
                          sm:h-10
                          bg-green-600
                          hover:bg-green-700
                          text-white
                          rounded-md
                          text-xs
                          sm:text-sm
                          font-medium
                          flex
                          items-center
                          justify-center
                          gap-1
                          transition
                        "
                      >
                        <ShoppingCart size={14} />

                        Add to Cart
                      </button>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default SellingProducts;