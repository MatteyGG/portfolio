import Link from "next/link";
import Image from "next/image";

function NavBar() {
  return (
    <nav className="bg-black py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex text-3xl  items-center bg-">
          <Link href="/">MatteyGG</Link>
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/code">Code</Link>
          </li>
          <li>
            <Link href="/design">Design</Link>
          </li>
        </ul>
        <a href="https://github.com/MatteyGG" target="_blank" rel="noopener noreferrer">
          <button className="flex items-center gap-0.5  text-white font-bold">
            <Image src="/github.svg" alt="GitHub" width={75} height={75} />
            My GitHub
          </button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;