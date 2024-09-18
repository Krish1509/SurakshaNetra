import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white p-6 relative">
      <h1 className="text-5xl font-extrabold text-yellow-400 mb-12">Welcome to SurakshaNetra</h1>

      <div className="flex flex-col space-y-8">
        {/* Admin Button */}
        <div className="w-full max-w-3xl p-6 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
          <Link to="/admin" className="w-full">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-purple-900 text-xl font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 animate-pulse">
              Admin Dashboard
            </button>
          </Link>
          <p className="mt-3 text-center text-yellow-200 text-lg font-medium">
            Access comprehensive tools for system management and oversight. Configure settings, review analytics, and manage user roles.
          </p>
        </div>
        
        {/* Installation Button */}
        <div className="w-full max-w-3xl p-6 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
          <Link to="/installation" className="w-full">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-purple-900 text-xl font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 animate-pulse">
              Installation & Setup
            </button>
          </Link>
          <p className="mt-3 text-center text-yellow-200 text-lg font-medium">
            Follow detailed instructions for the initial setup and configuration of the software. Ensure proper installation and system integration.
          </p>
        </div>
        
        {/* Security Control Room Button */}
        <div className="w-full max-w-3xl p-6 bg-white bg-opacity-20 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-500">
          <Link to="/security-control-room" className="w-full">
            <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-yellow-700 text-purple-900 text-xl font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-105 animate-pulse">
              Security Control Room
            </button>
          </Link>
          <p className="mt-3 text-center text-yellow-200 text-lg font-medium">
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
