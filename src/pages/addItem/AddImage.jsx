import AddIcon from "@/assets/ic_plus.svg";
import XIcon from "@/assets/ic_close.svg";
import { useRef, useState } from "react";
import apiRequest from "@/apis/apiRequest";
import styled from "styled-components";
import { pxToRem } from "@/utils/pxToRem";
import { flexCenter, fullSize, textStyles } from "@/styles/commonStyle";

export default function AddImage({ imgTitle = "상품이미지", onChange }) {
  const [imageUrl, setImageUrl] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const data = await apiRequest("/images/upload", {
        method: "POST",
        body: formData,
        headers: {},
      });
      setImageUrl(data.url);
      onChange?.(data.url);
    } catch (error) {
      console.error("이미지 등록 실패:", error);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemove = () => {
    setImageUrl(null);
    fileInputRef.current.value = "";
    onChange?.(null);
  };

  return (
    <li>
      <AddImageStyle>
        <label htmlFor="item_img">{imgTitle}</label>
        <div id="item_img" onClick={handleClick}>
          {imageUrl ? (
            <div className="image_add pick_image">
              <img src={imageUrl} alt={imgTitle} />
              <button
                className="close bnt"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove();
                }}
              >
                <XIcon />
              </button>
            </div>
          ) : (
            <div className="image_add btn">
              <div className="icon_position">
                <AddIcon />
                <span>이미지 등록</span>
              </div>
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </AddImageStyle>
    </li>
  );
}

export const AddImageStyle = styled.div`
  #item_img {
    position: relative;
    width: ${pxToRem(282)};
    height: ${pxToRem(282)};
    cursor: pointer;
    margin: 1rem 0 2rem;
  }

  .image_add {
    ${fullSize}
  }
  .image_add.btn {
    position: relative;
  }

  .icon_position {
    height: 100%;
    ${flexCenter}
    flex-direction: column;
  }

  .close.bnt {
    position: absolute;
    background-color: transparent;
    width: ${pxToRem(20)};
    height: ${pxToRem(20)};
    right: ${pxToRem(13)};
    top: ${pxToRem(14)};
  }
`;
