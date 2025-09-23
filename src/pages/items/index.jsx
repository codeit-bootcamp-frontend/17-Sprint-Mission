import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getProducts } from "@/apis/products";
import { handleFetch } from "@/utils/handleFetch";

import ItemList from "@/pages/items/ItemList";
import ItemsSearch from "@/pages/items/ItemsSearch";
import ItemsOrder from "@/pages/items/ItemsOrder";
import { ItemsStyle } from "@/pages/items/index.style";
import PageList from "@/pages/items/PageList";
import { breakpoints, media } from "@/styles/commonStyle";

//반응형
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width >= breakpoints.pc) return "pc";
  if (width >= breakpoints.tablet) return "tablet";
  return "mobile";
};

function ItemsPage() {
  //api 데이터 가져오기
  const [bestProducts, setBestProducts] = useState([]);
  const [products, setProducts] = useState([]);

  //상태 변경
  const [searchInput, setSearchInput] = useState("");
  const [orderBy, setOrderBy] = useState("recent");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [error, setError] = useState(null);

  //화면 크기
  const [device, setDevice] = useState(getDeviceType());

  //화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBestList = () => {
    if (device === "pc") return 4;
    if (device === "tablet") return 2;
    return 1;
  };

  const getAllList = () => {
    if (device === "pc") return 10;
    if (device === "tablet") return 6;
    return 4;
  };

  const fetchData = (params, setData, error) => {
    return handleFetch({
      fetchFn: () => getProducts(params),
      onSuccess: setData,
      //all, best 각각 에러 메시지 추가
      onError: (msg) => setError((prev) => ({ ...prev, [error]: msg })),
    });
  };

  //전체 상품
  const fetchProducts = () =>
    fetchData(
      { keyword: searchInput, orderBy, pageSize: getAllList(), page },
      (result) => {
        setProducts(result.list || []);
        setTotalCount(result.totalCount || 0);
      },
      "all"
    );

  //베스트상품
  const fetchBestProducts = () =>
    fetchData(
      { orderBy: "favorite", pageSize: getBestList() },
      (result) => setBestProducts(result.list || []),
      "best"
    );

  // 페이지이동, 검색, 정렬변경, 화면 크기 변경했을 때 렌더링
  useEffect(() => {
    fetchProducts();
    fetchBestProducts();
  }, [page, searchInput, orderBy, device]);

  return (
    <ItemsStyle>
      {error ? (
        <>
          <p>상품을 불러오는데 실패했습니다</p>
          <button className="back_btn">
            <Link to="/">돌아가기</Link>
          </button>
        </>
      ) : (
        <>
          <h2 className="itmes_title">베스트 상품</h2>
          <ul className="best_items">
            {bestProducts.map((item) => (
              <li key={item.id} className="best_item">
                <ItemList {...item} />
              </li>
            ))}
          </ul>

          <div className="item_all_list">
            <div className="item_nav">
              <h2 className="itmes_title">전체 상품</h2>
              <div className="item_order">
                <ItemsSearch setSearchInput={setSearchInput} />
                <button className="add_btn">
                  <Link to="/additem">상품등록하기</Link>
                </button>
                <ItemsOrder
                  orderBy={orderBy}
                  setOrderBy={setOrderBy}
                  device={device}
                />
              </div>
            </div>
            <ul className="all_items">
              {products.map((item) => (
                <li key={item.id} className="all_item">
                  <ItemList {...item} />
                </li>
              ))}
            </ul>
            {products.length <= 0 && (
              <div>"{searchInput}" 상품을 찾을 수 없습니다.</div>
            )}
          </div>

          <PageList
            totalCount={totalCount}
            page={page}
            setPage={setPage}
            getAllList={getAllList}
          />
        </>
      )}
    </ItemsStyle>
  );
}

export default ItemsPage;
