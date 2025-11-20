// Define the structure of a project
export interface Project {
  id: string;
  name: string;
  images: string[];  // Array of image URLs or file paths
  date: string;  // Date the project was created or started
  description: string;
  link: string;
  rating?: number;  
}

import tomato_1 from '../PROJECTS/Tomato/tomato_1.jpg';
import tomato_2 from '../PROJECTS/Tomato/tomato_2.jpg';
import tomato_3 from '../PROJECTS/Tomato/tomato_3.jpg';
import tomato_4 from '../PROJECTS/Tomato/tomato_1.jpg';
import tomato_5 from '../PROJECTS/Tomato/tomato_2.jpg';
import tomato_6 from '../PROJECTS/Tomato/tomato_3.jpg';



import  fuud_1 from '../PROJECTS/Tomato/fuud_1.png';
import fuud_2  from '../PROJECTS/Tomato/fuud_2.png';
import  fuud_3 from '../PROJECTS/Tomato/fuud_3.png';
import  fuud_4 from '../PROJECTS/Tomato/fuud_4.png';
import fuud_5  from '../PROJECTS/Tomato/fuud_5.png';



import ola_1  from '../PROJECTS/Tomato/ola_1.jpg';
import ola_2  from '../PROJECTS/Tomato/ola_2.jpg';
import ola_3  from '../PROJECTS/Tomato/ola_3.jpg';
import ola_4  from '../PROJECTS/Tomato/ola_4.jpg';

import super_1 from '../PROJECTS/Tomato/super_1.jpg';
import super_2 from '../PROJECTS/Tomato/super_2.jpg';
import super_3 from '../PROJECTS/Tomato/super_3.jpg';
import super_4 from '../PROJECTS/Tomato/super_4.jpg';
import super_5 from '../PROJECTS/Tomato/super_5.jpg';
import super_6 from '../PROJECTS/Tomato/super_6.jpg';
import super_7 from '../PROJECTS/Tomato/super_7.jpg';




// Example projects data
export const projects: Project[] = [
  {
    id: '1',
    name: "Tomato Food Page",
    images: [tomato_1, tomato_2, tomato_3 , tomato_4, tomato_5  , tomato_6],
    date: "2024-10-01",
    description: "Tomato is a modern web app built with React, TailwindCSS, and TypeScript that allows users to explore recipes, create meal plans, track nutritional intake, and share their favorite dishes. The app includes an Add to Cart feature for users to select ingredients or products and easily purchase them. With a smooth and responsive design, users can enjoy a seamless experience across devices while managing their culinary needs and meal planning.",
    link: "https://tomato-psi.vercel.app/",
    rating: 5
  },
  {
    id: '2',
    name: "Fuud Upgrade",
    images: [fuud_1,fuud_2,fuud_3,fuud_4,fuud_5],
    date: "2024-10-15",
    description: "is a modern web app built with React, TailwindCSS, and TypeScript that allows users to explore recipes, create meal plans, track nutritional intake, and share their favorite dishes. The app includes an Add to Cart feature for users to select ingredients or products and easily purchase them. With a smooth and responsive design, users can enjoy a seamless experience across devices while managing their culinary needs and meal planning.",
    link: "https://fuud2-l7qe-git-main-pawacodedatabases-projects.vercel.app/",
  },
  {
    id: '3',
    name: "SuperLicks Catering Services",
    images: [super_1, super_2, super_3, super_4, super_5, super_6, super_7],
    date: "2024-12-11",
    description: "SuperLicks is a dynamic and visually appealing food web application designed to elevate the dining experience for users. The platform combines a sleek user interface with robust functionality, enabling customers to explore, order, and enjoy a wide variety of meals. Whether you’re craving local delicacies or international cuisines, SuperLicks is your go-to destination for convenient and satisfying food options.",
    link: "https://superlicks.vercel.app/",
    rating:4
  },
  {
    id: '4',
    name: "OllaRealtor",
    images: [ola_1, ola_2, ola_3, ola_4],
    date: "2024-12-03",
    description: "OllaRealtor is a modern, feature-rich web application designed for a real estate company to streamline property listings, enhance user engagement, and simplify the property search process. Built using React and TypeScript, this platform combines high performance, scalability, and type safety to deliver a seamless experience for users and administrators alike.",
    link: "https://ollarealtortest.vercel.app/",
  },
];
