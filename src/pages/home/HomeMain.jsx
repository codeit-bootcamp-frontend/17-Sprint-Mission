import { homeCards } from "@/pages/home/homeCardData";

import HomeCard from "@/pages/home/HomeCard";
import { WidthContainer } from "@/styles/commonStyle";

function HomeMain() {
  return (
    <section className="main">
      <WidthContainer>
        <ul className="card_outter">
          {homeCards.map((card) => (
            <HomeCard key={card.img} {...card} />
          ))}
        </ul>
      </WidthContainer>
    </section>
  );
}

export default HomeMain;
