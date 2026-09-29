import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <p className="text-6xl font-bold mb-4">404</p>
      <p className="text-2xl font-bold mb-2">This page doesn't exist</p>
      <p className="text-base text-gray-600 mb-8">
        The page you're looking for may have been moved or never existed.
      </p>
      <Link
        to="/"
        className="px-6 py-2.5 rounded-lg text-white font-bold hover:opacity-90 transition"
        style={{ backgroundColor: "#AB824D" }}
      >
        Go back home
      </Link>
    </div>
  );
}