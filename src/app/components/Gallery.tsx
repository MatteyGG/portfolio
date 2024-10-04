// Gallery.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface GalleryProps {
  imageUrl: string[];
  topic: string;
  describtion: string;
  redirect: string;
}

const Gallery: React.FC<GalleryProps> = ({
  imageUrl,
  topic,
  describtion,
  redirect,
}) => {
  // Use the images array as needed
  return (
      <div className="card">
        <h1 className="text-2xl">{topic}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="images">
            {imageUrl.map((image, index) => (
              <Image
                className="hover:scale-125 duration-300 ease-in-out"
                key={index}
                src={image}
                alt={topic}
                width={200}
                height={200}
              />
            ))} 
            <p>{describtion}</p>
          </div>
        </div>
        <div className="place-items-end">
          <Link href={redirect}>See more</Link>
        </div>
      </div>
  );
};

export default Gallery;
