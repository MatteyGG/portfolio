import NavBar from "../components/nav";
import Gallery from '../components/Gallery';

export default function Design() {
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
                <h1 className="text-3xl mx-auto">Some of my works</h1>
                <div className="galleryFrame">
                    <Gallery images={cards} />
                </div>
            </div>
        </>
    );
}