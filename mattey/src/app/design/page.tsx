'use client';

import NavBar from "../components/nav";
import Gallery from '../components/Gallery';
import { useState } from "react";

export default function Design() {
    const [gallery, setGallery] = useState(''); 
    // TODO: make gallery subgallery

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
                <div className="galleryFrame">
                    <Gallery images={cards} />
                </div>
            </div>
        </>
    );
}