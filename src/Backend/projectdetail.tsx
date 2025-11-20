import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../pages/header";
import axios from "axios";
// import { FaLink } from "react-icons/fa";

import StarRating from "./../pages/PROJECTS/StarRating";

const JSON_BIN_ID = "691de48aae596e708f633441";
const API_KEY = "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  link?: string;
}

const DonationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(BASE_URL, {
          headers: { "X-Master-Key": API_KEY },
        });

        const found = res.data.record.products.find(
          (p: Product) => p.id === Number(id)
        );

        if (found) {
          setPost(found);
        }
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
  {[1, 2].map((_, i) => (
    <div
      key={i}
      className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
    >
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
           </div>
    </div>
  ))}
</div>
;

  if (!post)
    return (
  <div>
    <p className="text-center p-6 text-red-600">Project not found.</p>
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
  {[1, 2].map((_, i) => (
    <div
      key={i}
      className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
    >
      <div className="h-48 w-full bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      </div>
    </div>
  ))}
</div>

  </div>
       
    );

  // const shareUrl = encodeURIComponent(window.location.href);

  return (
    <>
      <Header />

      <div className="container mx-auto p-6 max-w-4xl">
        {/* TITLE */}
        <h1 className="text-4xl font-thin mb-6 text-center dark:text-purple-600">
          {post.name}
        </h1>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {post.images.map((img, index) => (
            <img
              key={index}
              src={img}
              onClick={() => setCurrentImageIndex(index)}
              className="cursor-pointer h-24 w-full object-cover rounded-lg shadow hover:scale-105 transition"
            />
          ))}
        </div>

        {/* BIG IMAGE */}
       <div className="flex justify-center mb-6">
  <img
    src={post.images[currentImageIndex]}
    className="w-full max-w-xl rounded-md shadow border-4 border-purple-600"
    alt={post.name}
  />
</div>


        {/* SHORT DESCRIPTION */}
        <p className="text-center text-sm dark:text-purple-300 mb-6">
          {post.description.slice(0, 200)}...
        </p>

        {/* VIEW FULL PROJECT (optional) */}
        {/* {post.link && (
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 block text-center text-white px-5 py-2 m-5 hover:bg-purple-700 transition"
          >
            <div className="flex justify-center gap-2">
              <FaLink /> View Full Project
            </div>
          </a>
        )} */}

        {/* STAR RATING */}
        <div className="text-center mt-6">
          <StarRating initialRating={4} />
        </div>

        <br />
        <hr />
        <br />

        {/* BACK LINK */}
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="text-sm text-gray-500 hover:text-black"
          >
            ← Back to All projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default DonationDetail;
