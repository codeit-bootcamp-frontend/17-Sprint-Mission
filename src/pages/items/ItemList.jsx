import { useEffect, useState } from "react";
import { deleteFavorite, getProductById, postFavorite } from "@/apis/products";
import { Link } from "react-router-dom";

import { ItemListStyle } from "@/pages/items/ItemList.style";
import noImage from "@/assets/noImage.png";
import FavoriteIcon from "@/assets/ic_favorit_Icon.svg";
import FavoriteFillIcon from "@/assets/ic_favorit_fill_Icon.svg";

export default function ItemList({ id, images, name, price, favoriteCount }) {
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(favoriteCount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchDetail() {
      const product = await getProductById(id);
      if (product) {
        setIsClick(product.isFavorite);
        setCount(product.favoriteCount);
      }
    }
    fetchDetail();
  }, [id]);

  const handleFavoriteClick = async () => {
    if (loading) return;
    setLoading(true);

    const nextState = !isClick;
    setIsClick(nextState);
    const newCount = count + (nextState ? +1 : -1);

    setCount(newCount);

    try {
      nextState ? await postFavorite(id) : await deleteFavorite(id);
    } catch (error) {
      console.error("좋아요 변경 실패:", error);
      setIsClick(isClick);
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
        <span className="item_name">
          <Link to={`/items/${id}`}>{name}</Link>
        </span>
        <span className="item_price">{Number(price).toLocaleString()} 원</span>
        <span className="item_favorit" onClick={handleFavoriteClick}>
          {isClick ? (
            <FavoriteFillIcon className="favorite_icon" />
          ) : (
            <FavoriteIcon className="favorite_icon" />
          )}
          {count}
        </span>
      </div>
    </ItemListStyle>
  );
}
