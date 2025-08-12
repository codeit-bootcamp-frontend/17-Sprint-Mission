import { homeCards } from "@/pages/home/homeCardData";

import HomeCard from "@/pages/home/HomeCard";

function HomeMain() {
  return (
    <section className="main">
      <div className="width_container">
        <ul className="card_outter">
          {homeCards.map((card) => (
            <HomeCard key={card.img} {...card} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HomeMain;
