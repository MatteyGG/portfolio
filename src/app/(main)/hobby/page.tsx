import Card from "@/app/components/card";
import cards from "@/lib/cards.json";

export default function Design() {
  // TODO: make gallery subgallery

  return (
    <>
      <div className="frame">
        <h1 className="cardHeader text-3xl">Hobby projects</h1>
        <div className="cardContainer">
          {cards.hobby.map((card) => (
            <Card
              type="hobby"
              key={card.topic}
              {...card}
            />
          ))}
        </div>
      </div>
    </>
  );
}
