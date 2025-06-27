import Lottie from 'lottie-react';
import animationData from '../assets/notfound.json';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <div className="w-full max-w-md">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <h1 className="text-3xl font-bold mt-4">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">The page you're looking for doesn't exist.</p>
    </div>
  );
};

export default NotFound;
