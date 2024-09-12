import NavBar from "../components/nav";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="avatar">
            <Image
              src="https://avatars.githubusercontent.com/u/49521885?v=4"
              alt="Matvey's avatar"
              width={128}
              height={128}
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold">Matvey</h1>
          <p className="text-center text-xl">
            Hi, I&#39;m a self-taught frontend developer from Russia. I&#39;m currently
            working on my own projects.
          </p>
          <p className="text-center text-xl">
            I&#39;m passionate about web development, game development and automate all the things.
          </p>
          <div className="flex gap-4 items-center ">
            <a className="animate-bounce delay-150 hover:animate-none ease-in-out"
              href="https://t.me/ser_dantes_r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram.svg"
                alt="Telegram"
                width={35}
                height={35}
              />
            </a>
            <a className="animate-bounce delay-500 hover:animate-none ease-in-out"
              href="https://github.com/MatteyGG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="GitHub" width={35} height={35} />
            </a>
            <a className="animate-bounce delay-1000 hover:animate-none ease-in-out"
              href="mailto: matgaranin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/gmail.svg"
                alt="Gmail"
                width={35}
                height={35}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


