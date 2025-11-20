import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const JSON_BIN_ID = "691de48aae596e708f633441";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;



interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: "male" | "female" | "unisex";
  sizes: string[];
  onSale?: true;
  originalPrice?: number;
}

const PRODUCTS_PER_PAGE = 10;

const Projects: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currency, setCurrency] = useState<"NGN" | "USD">("NGN");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(setCurrency)
        const response = await axios.get(BASE_URL, {
          headers: { "X-Master-Key": API_KEY },
        });
        setProducts(response.data.record.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        console.log(currency)
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  
  // Pagination logic
  const indexOfLast = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirst = indexOfLast - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4">Our Project</h2>
      <p className="text-sm text-center mb-3 animate-bounce">
        Every child deserves a good life
      </p>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="border p-4 rounded bg-gray-100 animate-pulse"
              >
                <div className="w-full h-40 bg-gray-300 rounded-md"></div>
                <div className="mt-3 h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded w-1/2"></div>
                <div className="mt-2 h-3 bg-gray-300 rounded w-1/3"></div>
              </div>
            ))}
        </div>
      ) : currentProducts.length === 0 ? (
        <p className="text-gray-500 text-center">Refreshing...</p>
      ) : (
        <>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {currentProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white border rounded-lg shadow-sm hover:shadow-lg transition duration-300"
    >
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-60 object-cover rounded-t-lg"
      />

      <div className="p-6">
        {/* Optional: Author/Date or Category */}
        {/* <p className="text-xs uppercase text-gray-500 mb-2">{product.category}</p> */}

        <h3 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>

        <Link
          to={`/projects/${product.id}`}
          className="inline-block bg-[#ff0060] text-white px-4 py-2 text-sm rounded hover:bg-black transition"
        >
          Read More
        </Link>
      </div>
    </div>
  ))}
</div>



          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-[#ff0060] hover:bg-[#000] text-white cursor-not-allowed"
                  : "bg-black text-white"
              }`}
            >
              Previous
            </button>
            <span className="font-medium text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-[#ff0060] hover:bg-[#000] text-white cursor-not-allowed"
                  : "bg-black text-white"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
