import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMessage, FaUser } from 'react-icons/fa6';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const TELEGRAM_BOT_TOKEN = '8119231817:AAGAmxzBGY0vBPeVFM2hEEBbXkoAUGxm_HE'; // Replace with your bot token
  const TELEGRAM_CHAT_ID = '6837437455'; // Replace with your chat ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      number,
      message,
      stayLoggedIn,
    };

    const telegramMessage = `
📧 *New Contact Form Submission* 📧
👤 *Name*: ${formData.name}
📩 *Email*: ${formData.email}
📞 *Phone*: ${formData.number}
💬 *Message*: ${formData.message}
🔒 *Stay Logged In*: ${formData.stayLoggedIn ? 'Yes' : 'No'}
    `;

    setIsLoading(true); // Show loading screen

    try {
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown',
          }),
        }
      );

      // Simulate loading delay
      setTimeout(() => {
        setIsLoading(false); 
        setIsSuccess(true);


     setTimeout(() => {
          navigate('/');
        }, 2000); // Success message duration
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
     {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="flex flex-col items-center">
            {/* Spinner */}
            <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-purple-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-white text-lg font-semibold">Submitting your message...</p>
          </div>
        </div>
      )}

      {/* Success Message */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 flex items-center justify-center bg-green-500 rounded-full">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="mt-4 text-white text-lg font-semibold">
              Message sent successfully!
            </p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      <div className="max-w-md mx-auto bg-transparent dark:bg-black shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Contact Me</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-b dark:bg-black border-gray-300 focus:outline-none"
                placeholder="Name"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-b dark:bg-black border-gray-300 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <FaPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-b dark:bg-black border-gray-300 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="relative">
              <FaMessage className="absolute left-3 top-3 text-gray-400" />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-b dark:bg-black border-gray-300 focus:outline-none"
                placeholder="Enter your message"
                rows={4}
              />
            </div>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={stayLoggedIn}
              onChange={() => setStayLoggedIn(!stayLoggedIn)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label className="ml-2 text-sm text-gray-600 dark:text-gray-300">Stay logged in</label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-purple-500 text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
