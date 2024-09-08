'use client';

import NavBar from "../components/nav";
import Gallery from '../components/Gallery';
import { useState } from "react";

export default function Design() {
    const [gallery, setGallery] = useState(''); 

    const cards = [
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 1' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 2' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },
        { imageUrl: '/images/STASIS.png', topic: 'Design Concept 3' },

    ];

    return (
        <>
            <NavBar />
            <div className="galleryFrame">
                <h1 className="galleryHeader text-3xl">Design projects</h1>
                <div className="flex justify-center items-center mt-12 gap-8">
                  <button className="bg-gray-700 px-4 py-2 rounded-md upper_animation" onClick={() => setGallery('web-design')}>Web-design</button>
                  <button className="bg-gray-700 px-4 py-2 rounded-md upper_animation" onClick={() => setGallery('arts')}>Arts</button>
                  <button className="bg-gray-700 px-4 py-2 rounded-md upper_animation" onClick={() => setGallery('social-media')}>Social media</button>
                </div>
                <div className="galleryFrame">
                    <Gallery images={cards} />
                </div>
            </div>
        </>
    );
}