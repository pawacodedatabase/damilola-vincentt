import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaRedditAlien,
} from "react-icons/fa";
import { FaAudioDescription } from "react-icons/fa6";

// -------------------------
// BACKEND CONFIG
// -------------------------
const JSON_BIN_ID = "691de48aae596e708f633441";
const API_KEY =
  "$2a$10$M/z2e.cKX1SUsOT62D4pk.gbhiuJhRx0u3VzNAe.DsTPIHHAQE6Zu";
const BASE_URL = `https://api.jsonbin.io/v3/b/${JSON_BIN_ID}`;

interface Project {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: "male" | "female" | "unisex";
  link: string;
  onSale?: boolean;
  rating?: number;
  date?: string;
}

// -------------------------
// RandomProject Component
// -------------------------
const RandomProject: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>([]);
  const navigate = useNavigate();

  // Fetch projects from JSONBin
  const fetchProjects = async () => {
    try {
      const response = await fetch(BASE_URL, {
        headers: { "X-Master-Key": API_KEY },
      });
      const data = await response.json();
      const backendProjects = data.record.products || [];

      // Shuffle and select 2 random projects
      const shuffled = [...backendProjects].sort(() => Math.random() - 0.5);
      const randomTwo = shuffled.slice(0, 2);

      setProjects(randomTwo);
      setCurrentImageIndexes(randomTwo.map(() => 0));
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Image slider handlers
  const handleNextImage = (index: number) => {
    setCurrentImageIndexes((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % projects[i].images.length : imgIndex
      )
    );
  };

  const handlePrevImage = (index: number) => {
    setCurrentImageIndexes((prev) =>
      prev.map((imgIndex, i) =>
        i === index
          ? (imgIndex - 1 + projects[i].images.length) % projects[i].images.length
          : imgIndex
      )
    );
  };

  const truncateDescription = (desc: string, limit: number = 15) => {
    return desc.split(" ").slice(0, limit).join(" ") + "...";
  };

  if (loading) {
    return (
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

    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-8 text-center dark:text-purple-400">
        Random Projects
      </h1>

      <div className="grid grid-cols-1   sm:grid-cols-2 gap-6">
        {projects.map((project, projectIndex) => (
          <div
            key={project.id}
            className="bg-white dark:bg-[#2E1A47] border-2  border-purple-600 shadow-md rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105"
          >
            {/* IMAGE SLIDER */}
            <div className="relative h-48 ">
              <img
                src={project.images[currentImageIndexes[projectIndex]]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handlePrevImage(projectIndex)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={() => handleNextImage(projectIndex)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
              >
                <FaArrowRight />
              </button>
            </div>

            {/* DETAILS */}
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <FaRedditAlien /> <FaAudioDescription />
              </div>

              <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {project.name}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {truncateDescription(project.description)}
              </p>

              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>{project.date || "No date provided"}</span>
              </div>

              <div className="flex items-center mb-4">
                <div>
                  {/* StarRating placeholder */}
                  <span className="text-yellow-400 font-semibold">
                    {project.rating || 3}⭐
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={() => navigate(`/newprojects/${project.id}`)}
                  className="bg-purple-600 text-white text-sm px-5 py-1 border-2 border-black hover:bg-black transition"
                >
                  Details
                </button>

                {/* <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black dark:bg-purple-400 dark:text-black dark:hover:bg-black dark:hover:text-white text-purple-600 text-sm px-5 py-1 hover:bg-black hover:text-white transition"
                >
                  View Project
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProject;
