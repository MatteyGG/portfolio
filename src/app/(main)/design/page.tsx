import Card from "@/app/components/card";
import cards from "@/lib/cards.json";

export default function Design() {
    // TODO: make gallery subgallery


    return (
      <>
        <div className="frame">
          <h1 className="cardHeader text-3xl">Design projects</h1>
          <div className="cardContainer">
            {cards.design.map((card) => (
              <Card
                type="design"
                describtion={card.description}
                key={card.topic}
                {...card}
              />
            ))}
          </div>
        </div>
      </>
    );
}