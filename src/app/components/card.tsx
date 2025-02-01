import Image from "next/image";
import Link from "next/link";

interface CardProps {
  type?: string; //code | design | hobby
  topic: string;
  images: string[];
  describtion: string;
  redirect: string;
  github?: string;
  indev?: boolean;
  private?: boolean;
}

const Card = ({
  type,
  topic,
  images,
  describtion,
  redirect,
  github,
  indev,
  private: isPrivate,
}: CardProps) => {
  return (
    <div className={` card items-stretch`}>
      <h1 className="text-2xl">{topic}</h1>
      <div className="inline-flex gap-4">
        <div className="w-1/2 h-32 container6 images">
          {images.length > 0 && (
            <Image
              className="z-10 h-full object-cover hover:translate-y-[10%] hover:translate-x-[10%] hover:scale-125 duration-300 ease-in-out"
              src={images[0]}
              alt={topic}
              width={2000}
              height={2000}
              quality={100}
            />
          )}
        </div>
        <p className="w-1/2 mt-1 text-balance text-sm line-clamp-3 text-right">
          {describtion}
        </p>
      </div>
      <div className="inline-flex self-end place-items-center gap-4">
        <Link href={`/projects${type ? `?type=${type}&topic=${topic}` : `?topic=${topic}`}`}>
          Read more
        </Link>
        {indev && (
          <div className="text-green-600 px-2 py-1">In development</div>
        )}
        {github && !isPrivate ? (
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={isPrivate ? "text-red-500" : ""}
          >
            <span>Github</span>
          </Link>
        ) : (
          <div className="text-red-500">
            <span>Private</span>
          </div>
        )}

        <Link href={redirect}>Link</Link>
      </div>
    </div>
  );
};

export default Card;

