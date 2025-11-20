import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header';
import StarRating from './StarRating';
import axios from 'axios';

import av1 from '../../assets/img/1.jpg';
import av2 from '../../assets/img/2.jpg';
import av3 from '../../assets/img/3.jpg';
import av4 from '../../assets/img/4.jpg';
import av5 from '../../assets/img/5359af2ff56b783dc1b06699fcc0983a.jpg';
import av6 from '../../assets/img/a8381ed241fe8fbb6d90e483a214c30a.jpg';

import {
  FaArrowLeft,
  FaCalendar,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const avatars = [av1, av2, av3, av4, av5, av6];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [project, setProject] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [avatarIndex, setAvatarIndex] = useState(0);

  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [comments, setComments] = useState<
    { name: string; comment: string; avatar: string }[]
  >([]);

  // ---------------------------
  // FETCH SINGLE PROJECT
  // ---------------------------
  const fetchProject = async () => {
    try {
      const response = await axios.get(
        'https://api.jsonbin.io/v3/b/691de48aae596e708f633441',
        {
          headers: {
            'X-Master-Key': 'YOUR_JSONBIN_KEY',
          },
        }
      );

      const data = response.data.record.products;

      const found = data.find((item: any) => item.id === id);

      setProject(found || null);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [id]);

  if (loading) {
    return <p className="text-center p-10">Loading project...</p>;
  }

  if (!project) {
    return <p className="text-center p-10">Project not found.</p>;
  }

  // -----------------------------------------
  // FUNCTIONS
  // -----------------------------------------

  const truncateDescription = (description: string) =>
    description.split(' ').slice(0, 30).join(' ') + '...';

  const handleSubmitComment = () => {
    if (comment.trim() && selectedAvatar && name.trim()) {
      const newComment = {
        name,
        comment,
        avatar: selectedAvatar,
      };

      setComments((prev) => [...prev, newComment]);

      setComment('');
      setName('');
      setSelectedAvatar('');
    } else {
      alert('Please fill all fields and select an avatar.');
    }
  };

  const visibleAvatars = 4;
  const totalSlides = Math.ceil(avatars.length / visibleAvatars);

  const handleNextAvatar = () =>
    setAvatarIndex((prev) => (prev + 1) % totalSlides);

  const handlePrevAvatar = () =>
    setAvatarIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const handleThumbnailClick = (index: number) =>
    setCurrentImageIndex(index);

  return (
    <>
      <Header />

      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-thin mb-6 text-center dark:text-purple-600">
          {project.name}
        </h1>

        {/* THUMBNAILS */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.images.map((image: string, index: number) => (
            <div
              key={index}
              className="cursor-pointer hover:scale-105 transition"
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumb ${index}`}
                className="w-full h-24 object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* LARGE IMAGE */}
        <div className="flex justify-center mb-6">
          <img
            src={project.images[currentImageIndex]}
            className="w-full max-w-3xl rounded-md"
          />
        </div>

        <p className="text-sm text-center dark:text-purple-300 mb-6">
          {truncateDescription(project.description)}
        </p>

        <a
          href={project.link}
          target="_blank"
          className="bg-purple-600 text-white block text-center p-3 m-5 hover:bg-purple-700"
        >
          <div className="flex justify-center gap-2">
            <FaLink /> <span>View Full Project</span>
          </div>
        </a>

        <div className="flex justify-center gap-2 mt-5">
          <FaCalendar />
          <p className="text-sm">{project.date}</p>
        </div>

        <div className="mt-6 text-center">
          <StarRating initialRating={project.rating || 4} />
        </div>

        <br />
        <hr />
        <br />

        {/* ABOUT DEV */}
        <div className="container">
          <h1 className="text-center text-2xl mb-4 dark:text-purple-500">
            About Developer
          </h1>

          <p className="text-center text-sm dark:text-purple-200 mb-5">
            Hello, I'm <b className="text-red-200">Damilola Vincent</b>, a passionate web developer and the creator of{' '}
            <b className="text-red-200">Pawacode</b>.
          </p>

          <hr />
          <br />

          {/* SOCIAL ICONS */}
          <div className="flex justify-center space-x-6 mt-8 mb-8">
            <a href="mailto:whakhydoh@gmail.com" className="text-blue-600">
              <FaEnvelope size={30} />
            </a>
            <a href="https://wa.me/+2348053208997" className="text-green-600">
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/damilola-ogunbanwo-1347b5284/"
              className="text-blue-700"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/its.damilola"
              className="text-pink-600"
            >
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com/vicesensei" className="text-blue-500">
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/pawacodedatabase"
              className="text-gray-700"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <hr />
        <br />

        {/* COMMENT SECTION */}
        <h3 className="text-xl text-center font-bold dark:text-purple-600 mb-4">
          Leave a Comment
        </h3>

        {/* AVATAR SLIDER */}
        <div className="relative mb-6">
          <button
            onClick={handlePrevAvatar}
            className="absolute top-1/2 left-0 bg-black text-white p-3 rounded-full"
          >
            <FaArrowLeft />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{
                width: `${(avatars.length / visibleAvatars) * 100}%`,
                transform: `translateX(-${avatarIndex * 100}%)`,
              }}
            >
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-32 h-32 flex justify-center cursor-pointer"
                  onClick={() => setSelectedAvatar(avatar)}
                >
                  <img
                    src={avatar}
                    className={`w-20 h-20 rounded-full border ${
                      selectedAvatar === avatar ? 'border-purple-600' : ''
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNextAvatar}
            className="absolute top-1/2 right-0 bg-black text-white p-3 rounded-full"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* NAME & COMMENT INPUT */}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-4 border-b mb-4 dark:bg-black dark:text-white"
        />

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
          className="w-full h-32 p-4 border rounded-lg dark:bg-black dark:text-white"
        />

        <button
          onClick={handleSubmitComment}
          className="bg-purple-600 text-white mt-4 px-6 py-2 hover:bg-purple-700"
        >
          Submit Comment
        </button>

        {/* SHOW COMMENTS */}
        <div className="mt-8 space-y-4">
          {comments.map((item, index) => (
            <div
              key={index}
              className="flex p-4 bg-gray-100 dark:bg-gray-700 rounded-lg"
            >
              <img
                src={item.avatar}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold dark:text-white">{item.name}</p>
                <p className="dark:text-gray-300">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
