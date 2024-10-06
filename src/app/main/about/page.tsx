import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex mt-12 justify-center items-center overscroll-none">
        <div className="flex flex-col items-center gap-4">
          <div className="avatar">
            <Image
              src="https://avatars.githubusercontent.com/u/49521885?v=4"
              alt="Matvey's avatar"
              width={256}
              height={256}
              className="rounded-full"
            />
            <div className="flex gap-12 items-center ">
            <a
              className="animate-bounce delay-150 hover:animate-none ease-in-out"
              href="https://t.me/ser_dantes_r"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/telegram.svg"
                alt="Telegram"
                width={50}
                height={50}
              />
            </a>
            <a
              className="animate-bounce delay-500 hover:animate-none ease-in-out"
              href="https://github.com/MatteyGG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/github.svg" alt="Github" width={50} height={50} />
            </a>
            <a
              className="animate-bounce delay-1000 hover:animate-none ease-in-out"
              href="mailto: matgaranin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gmail.svg" alt="Gmail" width={50} height={50} />
            </a>
          </div>
          </div>
          <div className="text-center text-xl md:text-2xl">
          <h1 className="text-4xl font-bold">
            <> Hi there, I&#39;m Mattey </>
          </h1>
          <p className="">
            A self-taught frontend developer from Russia. I&#39;m currently
            working on my own projects.
          </p>
          <p className="">
            I&#39;m passionate about web development, game development and
            automate all the things.
          </p>
          </div>
          {/* Skills */}
          <div className="grid md:grid-cols-3  gap-6 mt-4 place-items-center text-center w-full">
            <div className="col-span-full">
              <div className="">
                <h2 className="text-3xl font-bold">
                  Languages and tools
                </h2>
                <div className="flex w-full gap-6 mt-6">
                  <Image src="/html.svg" alt="HTML" width={60} height={60} />
                  <Image src="/css.svg" alt="CSS" width={60} height={60} />
                  <Image
                    src="/javascript.svg"
                    alt="JavaScript"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/python.svg"
                    alt="Python"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
            <div className=" -mt-4">
              <div className="items-center">
                <h2 className="text-2xl font-bold">JavaScript</h2>
                <div className="flex gap-2">
                  <Image src="/react.svg" alt="React" width={60} height={60} />
                  <Image src="/next.svg" alt="NextJS" width={60} height={60} />
                  <Image src="/prism-sharp.svg" alt="Prism" width={60} height={60} />
                </div>
              </div>
            </div>
            <div className="-mt-4">
              <div className="items-center">
                <h2 className="text-2xl font-bold">Python</h2>
                <div className="flex gap-2">
                  <Image src="/aiogram.webp" alt="Aiogram" width={60} height={60} />
                  <Image src="/taipy.png" alt="Taipy" width={60} height={60} />
                </div>
              </div>
            </div>
            <div className="-mt-4">
              <div className="mt-4 items-center">
                <h2 className="text-2xl font-bold">Other</h2>
                <div className="flex gap-2 items-center">
                  <Image
                    src="/git_tech.svg"
                    alt="git"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/docker.svg"
                    alt="Docker"
                    width={60}
                    height={60}
                  />
                  <Image
                    src="/postgres.svg"
                    alt="PostgreSQL"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
