import { useNavigate } from 'react-router-dom';
import logo from './assets/logo1.png';
import sih from './assets/SIH-Logo.png';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white p-6 relative overflow-hidden">
      {/* Top-Left Image with Background Box */}
      <div className="absolute top-4 left-4 p-2 bg-yellow-50 bg-opacity-70 rounded-lg shadow-lg border-[1px] border-yellow-300">
        <img src={sih} alt="SIH Logo" className="h-[60px] w-[170px] object-contain" />
      </div>

      {/* Title with Logo Side by Side */}
      <div className="relative flex items-center mt-[-30px] mb-4">
        <img src={logo} alt="Logo" className="h-[80px] w-[80px] object-contain mr-4 shadow-lg mt-4" />
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wider text-yellow-400 drop-shadow-lg hover:text-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
          SurakshaNetra
        </h1>
      </div>

      {/* Team and Problem Code Info */}
      <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-purple-900 font-bold px-3 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          Team: CodeSparks
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-purple-900 font-bold px-3 py-1.5 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          Problem Code: SIH1605
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl text-center bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-2xl text-md md:text-lg space-y-6 animate-fade-in border-t-4 border-yellow-400 hover:shadow-3xl transition duration-500">
        <p className="font-semibold text-yellow-300">
          Protecting women through real-time surveillance and advanced analytics.
        </p>
        <p>
          SurakshaNetra leverages AI to monitor suspicious activities, identify threats, and assist law enforcement in preventing crimes.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-yellow-200 hover:text-yellow-300 transition duration-300">
            Real-time person detection & gender classification
          </li>
          <li className="text-yellow-200 hover:text-yellow-300 transition duration-300">
            Alerts for lone women at night
          </li>
          <li className="text-yellow-200 hover:text-yellow-300 transition duration-300">
            SOS gesture recognition
          </li>
          <li className="text-yellow-200 hover:text-yellow-300 transition duration-300">
            Identifying crime hotspots through alert history
          </li>
        </ul>
        <p className="italic text-yellow-200 text-sm mt-6">
          Note: This is a UI wireframe for the SurakshaNetra project.
        </p>
      </div>

      {/* Start Button */}
      <button onClick={handleGetStarted} className="mt-8 px-10 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-purple-900 text-lg font-bold rounded-full shadow-lg hover:shadow-3xl transition duration-300 ease-in-out transform hover:scale-105 animate-glow">
        Get Started
      </button>

      {/* Footer */}
      <div className="mt-4 mb-[-20px] text-xs text-white opacity-80">
        © 2024 CodeSparks Team - All Rights Reserved
      </div>
    </div>
  );
};

export default HomePage;
