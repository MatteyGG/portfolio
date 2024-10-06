'use client';

import Card from "../../components/card";
export default function Design() {
    // TODO: make gallery subgallery


    return (
        <>
            <div className="galleryFrame">
                <h1 className="galleryHeader text-3xl">Design projects</h1>
                <div className="galleryContainer">
                    <Card images={['/images/stasis.png']} topic="Stasis" describtion="My portfolio project" redirect="/code/stasis"  />
                </div>
            </div>
        </>
    );
}