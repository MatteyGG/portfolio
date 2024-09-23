import Image from "next/image";
import Link from "next/link";

interface CardProps {
  topic: string;
  images: string[];
  describtion: string;
  redirect: string;
}

const Card = ({ topic, images, describtion, redirect }: CardProps) => {
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
        <div className="place-items-end">
        <Link href={redirect}>See more</Link>
      </div>
    </div>
    </div>
  );
};

export default Card;
