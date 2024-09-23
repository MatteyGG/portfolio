"use client";

import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className="hidden md:flex backdrop-blur-lg py-4">
        <div className="flex justify-between items-center mx-8">
          <div className="flex text-3xl  items-center">
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
          <div className="flex gap-8">
            <div className="flex items-center gap-8 animate-pulse duration-700">
              <button className="flex items-center gap-0.5 font-bold text-xl">
                <Link href="/about">About me</Link>
              </button>
            </div>

            <button
              className="text-xl"
              onClick={() => {
                document.documentElement.classList.toggle("dark");
                localStorage.setItem(
                  "theme",
                  document.documentElement.classList.toString()
                );
              }}
            >
              Dark mode
            </button>
          </div>
        </div>
      </nav>
      <nav className="flex md:hidden justify-center backdrop-blur-lg py-4">
        <div className="flex justify-between items-center mx-8">
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
        </div>
      </nav>
    </>
  );
}

export default NavBar;
