import EndingImage from "@/assets/home_bottom.png";
import { WidthContainer } from "@/styles/commonStyle";

function HomeEnding() {
  return (
    <section className="ending">
      <WidthContainer>
        <div className="flex_div">
          <div className="title_div">
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
          </div>
          <img src={EndingImage} alt="ending panda" />
        </div>
      </WidthContainer>
    </section>
  );
}

export default HomeEnding;
