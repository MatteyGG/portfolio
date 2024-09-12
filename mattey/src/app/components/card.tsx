import Image from "next/image";
import Link from "next/link";

interface CardProps {
  topic: string;
  images: string[];
  redirect: string;
}

const Card = ({ topic, images, redirect }: CardProps) => {
  return (
    <div className="galleryContainer">
      <div className="card">
        <h2>{topic}</h2>
        <div className="images">
        {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={topic}
              width={200}
              height={200}
            />
          ))}
        </div>
        <Link href={redirect}>See more</Link>
      </div>
    </div>
  );
};

export default Card;
