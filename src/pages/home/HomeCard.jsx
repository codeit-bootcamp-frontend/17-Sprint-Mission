function HomeCard({ img, alt, tag, title, desc }) {
  return (
    <li className="card">
      <img src={img} alt={alt} />
      <div className="card_info">
        <span>{tag}</span>
        <h2>{title}</h2>
        {desc.split("\n").map((line, index) => {
          return <p key={index}>{line}</p>;
        })}
      </div>
    </li>
  );
}

export default HomeCard;
