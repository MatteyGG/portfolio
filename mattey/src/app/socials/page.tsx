import NavBar from "../components/nav";
import Image from "next/image";

export default function Socials() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen justify-center items-center">
        <div className="flex items-center gap-8">
          <a
            href="https://t.me/MatteyGG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-0.5  text-white font-bold">
              <Image
                src="/telegram.svg"
                alt="Telegram"
                width={35}
                height={35}
              />
              My telegram
            </button>
          </a>
          <a
            href="https://github.com/MatteyGG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-0.5  text-white font-bold">
              <Image src="/github.svg" alt="GitHub" width={75} height={75} />
              GitHub
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
