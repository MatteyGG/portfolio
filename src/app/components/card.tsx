import Image from "next/image";
import Link from "next/link";

interface CardProps {
  topic: string;
  images: string[];
  describtion: string;
  redirect: string;
  github?: string;
  private?: boolean;
}

const Card = ({ topic, images, describtion, redirect, github, private: isPrivate }: CardProps) => {
  return (
    <div className="">
      <div className="card">
        <h1 className="text-2xl">{topic}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="images">
            {images.map((image, index) => (
              <Image
                className="hover:scale-125 duration-300 ease-in-out"
                key={index}
                src={image}
                alt={topic}
                width={200}
                height={200}
              />
            ))}
          </div>
          <p>{describtion}</p>
        </div>
        <div className="flex justify-between">
          {github && !isPrivate ? (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={isPrivate ? "text-red-500" : ""}
            >
              Github
            </Link>
          ) : (
            <div className="text-red-500">Private</div>
          )}
          <Link href={redirect}>Link</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;

