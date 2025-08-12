import { ItemListStyle } from "@/pages/items/ItemList.style";
import noImage from "@/assets/NoImage.png";
import favoriteIcon from "@/assets/favorit_Icon.png";
import favoriteFillIcon from "@/assets/favorit_fill_Icon.png";
import { useState } from "react";
import { patchProduct } from "@/apis/products";
import { Link } from "react-router-dom";

export default function ItemList({ id, images, name, price, favoriteCount }) {
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(favoriteCount);
  const [loading, setLoading] = useState(false);

  const handleFavoriteClick = async () => {
    if (loading) return;
    setLoading(true);

    setIsClick((prev) => !prev);
    const newCount = count + (!isClick ? +1 : -1);

    setCount(newCount);

    try {
      await patchProduct(id, { favoriteCount: newCount });
    } catch (error) {
      console.error("좋아요 변경 실패:", error);
      setIsClick(!isClick);
      setCount(count);
    } finally {
      setLoading(false);
    }
    return;
  };

  return (
    <ItemListStyle>
      <Link to={`/items/${id}`}>
        <img
          src={images && images.length > 0 ? images : noImage}
          alt={name}
          className="product_img"
          onError={(e) => {
            e.currentTarget.src = noImage;
          }}
        />
      </Link>
      <div className="item_info">
        <h4 className="item_name">
          <Link to={`/items/${id}`}>{name}</Link>
        </h4>
        <span className="item_price">{Number(price).toLocaleString()} 원</span>
        <span className="item_favorit" onClick={handleFavoriteClick}>
          <img
            className="favorite_icon"
            src={!isClick ? favoriteIcon : favoriteFillIcon}
            alt="favorite"
          />
          {count}
        </span>
      </div>
    </ItemListStyle>
  );
}
