import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 flex justify-between">
      <div className="flex gap-6 text-sm">
        <Link to="/about">About</Link>
        <a href="#">Blog</a>
        <Link to="/">Cafe</Link>
        <a href="#">Contact Us</a>
      </div>
    </nav>
  );
}
