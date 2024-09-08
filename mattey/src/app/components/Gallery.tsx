// Gallery.tsx
import Image from "next/image";
import React from "react";

interface GalleryProps {
  images: { imageUrl: string; topic: string }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  // Use the images array as needed
  return (
    <div className="galleryContainer">
      {images.map((image, index) => (
        <div className="card" key={index}>
          <Image
            width={200}
            height={200}
            src={image.imageUrl}
            alt={image.topic}
          />
          <p>{image.topic}</p>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
