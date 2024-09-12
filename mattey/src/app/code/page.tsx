import Card from "../components/card";
import NavBar from "../components/nav";

export default function Code() {
    return (
        <>
            <NavBar />
            <div className="mt-12">
                <h1 className="galleryHeader text-3xl">Code projects</h1>
                <div className="flex justify-center galeryFrame">
                <Card topic="Stasis" images={['/images/STASIS.png', '/images/STASIS.png', '/images/STASIS.png']} redirect="/code/stasis" />
                <Card topic="Stasis" images={['/images/STASIS.png', '/images/STASIS.png', '/images/STASIS.png']} redirect="/code/stasis" />
                <Card topic="Stasis" images={['/images/STASIS.png', '/images/STASIS.png', '/images/STASIS.png']} redirect="/code/stasis" />
                </div>
            </div>
        </>
    )
}