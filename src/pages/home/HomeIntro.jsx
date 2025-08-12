import { Link } from "react-router-dom";

import IntroImage from "@/assets/img_home_top.png";

function HomeIntro() {
  return (
    <section className="intro">
      <div className="width_container flex_div">
        <div className="title_div">
          <h2>일상의 모든 물건을 거래해 보세요</h2>
          <Link to="/items" className="shopping btn text_tall">
            구매하러 가기
          </Link>
        </div>
        <img src={IntroImage} alt="intro panda" />
      </div>
    </section>
  );
}

export default HomeIntro;
