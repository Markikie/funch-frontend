
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-500 to-black  text-white shadow-lg">
        <Link href="/">
        <h1 className="text-2xl font-bold">Hotel Booking</h1>
        </Link>

        <div className="flex gap-8">
        <Link href ="/booking" className="text-white font-bold hover:text-gray-300">Booking</Link>
        <Link href="/login" className="text-white font-bold hover:text-gray-300">Login</Link>

        </div>
      </nav>
    </div>
  );
};
export default Navbar;
