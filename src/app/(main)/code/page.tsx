import Card from "@/app/components/card";
import cards from "@/lib/cards.json";

export default function Code() {
    return (
      <>
        <div className="frame">
          <h1 className="cardHeader text-3xl">Code projects</h1>
          <div className="cardContainer md:mt-12 justify-center">
            {cards.code.map((card) => (
              <Card
                type="code"
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

