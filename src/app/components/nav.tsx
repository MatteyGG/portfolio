"use client";

import Link from "next/link";

function NavBar() {
  return (
    <>
      <nav className="hidden md:block backdrop-blur-lg py-4">
        <div className="flex justify-between items-center mx-8">
          <div className="flex text-3xl  items-center">
            <div className="flex items-center gap-8 animate-pulse duration-700">
              <button className="flex items-center gap-0.5 font-bold text-xl">
                <Link href="/">Home</Link>
              </button>
            </div>
          </div>
          <ul className="flex justify-center items-center gap-8">
            <li className="upper_animation">
              <Link href="/main/about">About</Link>
            </li>
            <li className="upper_animation">
              <Link href="/main/code">Code</Link>
            </li>
            <li className="upper_animation">
              <Link href="/main/design">Design</Link>
            </li>
          </ul>
          <div className="flex gap-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => {
                  {
                    document.documentElement.classList.toggle("dark");
                    localStorage.setItem(
                      "theme",
                      document.documentElement.classList.toString()
                    );
                  }
                }}
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gary-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
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
