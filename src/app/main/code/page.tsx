import Card from "../../components/card";

export default function Code() {
    return (
        <>
            <div className="mt-12">
                <h1 className="galleryHeader text-3xl">Code projects</h1>
                <div className="galleryContainer mt-12 justify-center">
                <Card topic="Portfolio" images={['/images/portfolio_prew.png']} describtion="My portfolio project" redirect="/code/stasis" />
                <Card topic="Podgoroy" images={['/images/podgoroy_prew.png']} describtion="My portfolio project" redirect="/code/stasis" />
                </div>
            </div>
        </>
    )
}