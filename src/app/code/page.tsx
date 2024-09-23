import Card from "../components/card";
import NavBar from "../components/nav";

export default function Code() {
    return (
        <>
            <NavBar />
            <div className="mt-12">
                <h1 className="galleryHeader text-3xl">Code projects</h1>
                <div className="galeryFrame mt-12">
                <Card topic="Portfolio" images={['/images/portfolio_prew.png']} describtion="My portfolio project" redirect="/code/stasis" />
                <Card topic="Podgoroy" images={['/images/podgoroy_prew.png']} describtion="My portfolio project" redirect="/code/stasis" />
                </div>
            </div>
        </>
    )
}