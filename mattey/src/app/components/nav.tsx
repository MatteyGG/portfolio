'use client';

import Link from "next/link";
import Image from "next/image";
function NavBar() {
  return (
    <nav className="bg-black py-4">
      <div className="flex justify-between items-center mx-8">
        <div className="flex text-3xl  items-center bg-">
          <Link href="/">MatteyGG</Link>
        </div>
        <ul className="flex justify-center items-center gap-8">
          <li className="upper_animation">
            <Link href="/">Home</Link>
          </li>
          <li className="upper_animation">
            <Link href="/code">Code</Link>
          </li>
          <li className="upper_animation">
            <Link href="/design">Design</Link>
          </li>
        </ul>
        
        <div className="flex items-center gap-8 animate-pulse duration-700">
          <Link href="/socials">
            <button className="flex items-center gap-0.5  text-white font-bold text-xl">
              Contact me
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;