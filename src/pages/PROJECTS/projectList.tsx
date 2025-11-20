import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendarAlt,
  FaRedditAlien,
} from "react-icons/fa";
import { FaAudioDescription } from "react-icons/fa6";

import Header from "../header";
import StarRating from "./StarRating";

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
  date?: string; // if present
}

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // Track image index per project
  const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>([]);

  // Fetch projects from JSONBin
  const fetchProjects = async () => {
    try {
      const response = await fetch(BASE_URL, {
        headers: {
          "X-Master-Key": API_KEY,
        },
      });

      const data = await response.json();

      const backendProjects = data.record.products || [];
      setProjects(backendProjects);

      // Set slider indexes based on number of projects
      setCurrentImageIndexes(backendProjects.map(() => 0));
    } catch (error) {
      console.error("Failed to fetch backend projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Next image
  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index + 1) % projects[i].images.length
          : index
      )
    );
  };

  // Previous image
  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index - 1 + projects[i].images.length) %
            projects[i].images.length
          : index
      )
    );
  };

  // Truncate description
  const truncateDescription = (description: string, limit: number = 15) => {
    return description.split(" ").slice(0, limit).join(" ") + "...";
  };

  return (
    <>
      <Header />

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
  {[1, 2].map((_, i) => (
    <div
      key={i}
      className="animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden"
    >
      <div className="h-48 w-[80%] bg-gray-300 dark:bg-gray-600"></div>
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
      </div>
    </div>
  ))}
</div>

      ) : (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-semibold mb-8 text-center dark:text-purple-400">
            Hosted Projects
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 p-5 lg:grid-cols-3 gap-6">
            {projects.map((project, projectIndex) => (
              <div
                key={project.id}
                className="bg-white dark:bg-[#2E1A47] shadow-md mb-9 rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105"
              >
                {/* IMAGE SLIDER */}
                <div className="relative h-48">
                  <img
                    src={project.images[currentImageIndexes[projectIndex]]}
                    alt={`Project ${project.name}`}
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
                  <div className="flex gap-2">
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
                    <StarRating initialRating={project.rating || 3} />
                  </div>

                  <div className="flex justify-center gap-4">
                    <Link
                      to={`/newprojects/${project.id}`}
                      className="bg-purple-600 text-white text-sm px-5 py-1 border-2 border-black hover:bg-black transition"
                    >
                      Details
                    </Link>

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
      )}
    </>
  );
};

export default ProjectList;
