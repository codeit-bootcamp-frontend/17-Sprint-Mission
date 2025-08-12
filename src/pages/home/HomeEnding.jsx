import EndingImage from "@/assets/Img_home_bottom.png";

function HomeEnding() {
  return (
    <section className="ending">
      <div className="width_container flex_div">
        <div className="title_div">
          <h2>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h2>
        </div>
        <img src={EndingImage} alt="ending panda" />
      </div>
    </section>
  );
}

export default HomeEnding;
