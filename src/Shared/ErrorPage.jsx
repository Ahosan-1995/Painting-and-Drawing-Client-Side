import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600">
            <div className="max-w-md text-center p-6 bg-white rounded-lg shadow-xl">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-lg text-gray-700 mb-8">Oops! The page you are looking for could not be found.</p>
                <Link to="/" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md transition duration-300 ease-in-out inline-block">Go back to Home</Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;