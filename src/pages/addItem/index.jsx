import { postProduct } from "@/apis/products";
import AddImage from "@/pages/addItem/AddImage";
import { AddItemStyle } from "@/pages/addItem/index.style";
import InputField from "@/pages/addItem/InputField";
import InputTag from "@/pages/addItem/InputTag";
import { WidthContainer } from "@/styles/commonStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    itemName: "",
    itemIntroduction: "",
    itemPrice: "",
    images: [],
    tags: [],
  });

  const errorMessage = {
    itemName: "상품명을 입력해주세요",
    itemIntroduction: "상품 소개를 입력해주세요",
    itemPrice: "숫자로 된 판매 가격을 입력해주세요",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid =
    form.itemName.trim() &&
    form.itemIntroduction.trim() &&
    form.itemPrice.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: form.itemName,
        description: form.itemIntroduction,
        price: Number(form.itemPrice),
        images: form.images,
        tags: form.tags,
      };
      await postProduct(data);

      navigate("/items");
    } catch (error) {
      console.error("상품 등록 실패:", error);
    }
  };

  return (
    <AddItemStyle>
      <WidthContainer>
        <form action="/items" onSubmit={handleSubmit}>
          <div className="item_add">
            <h2>상품 등록하기</h2>
            <button
              className="item_submit btn"
              type="submit"
              disabled={!isFormValid}
            >
              등록
            </button>
          </div>
          <ul className="input_list">
            <AddImage
              onChange={(url) => setForm({ ...form, images: url ? [url] : [] })}
            />
            <InputField
              id="item_name"
              name="itemName"
              label="상품명"
              placeholder="상품명을 입력해주세요"
              value={form.itemName}
              onChange={handleChange}
              errorMessage={errorMessage.itemName}
            />

            <InputField
              id="item_introduction"
              name="itemIntroduction"
              label="상품소개"
              placeholder="상품 소개를 입력해주세요"
              value={form.itemIntroduction}
              onChange={handleChange}
              errorMessage={errorMessage.itemIntroduction}
            />

            <InputField
              id="item_price"
              name="itemPrice"
              label="판매가격"
              type="number"
              placeholder="판매 가격을 입력해주세요"
              value={form.itemPrice}
              onChange={handleChange}
              errorMessage={errorMessage.itemPrice}
            />
            <InputTag onChange={(tags) => setForm({ ...form, tags })} />
          </ul>
        </form>
      </WidthContainer>
    </AddItemStyle>
  );
}
