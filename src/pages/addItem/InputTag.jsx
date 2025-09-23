import XIcon from "@/assets/ic_close.svg";
import { flexCenter } from "@/styles/commonStyle";
import { pxToRem } from "@/utils/pxToRem";
import { useState } from "react";
import styled from "styled-components";

export default function InputTag({ onChange }) {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [includeValue, setIncludeValue] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();

      if (tags.some((tag) => tag.label === inputValue.trim())) {
        setIncludeValue(true);
        return;
      }

      const new_tag = {
        id: crypto.randomUUID(),
        label: inputValue.trim(),
      };

      const newTags = [...tags, new_tag];
      setTags(newTags);
      onChange?.(newTags.map((tag) => tag.label));
      setInputValue("");
    }
  };

  const removeTag = (id) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    setTags(newTags);
    onChange?.(newTags.map((tag) => tag.label));
  };

  return (
    <li className={includeValue ? "has_error" : ""}>
      <TagStyle>
        <label htmlFor="item_tag">태그</label>
        <input
          id="item_tag"
          className="input_style"
          type="text"
          placeholder="태그를 입력해주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {includeValue && (
          <span className="errorText">이미 입력된 태그입니다</span>
        )}

        <ol className="tags">
          {tags.map((tag) => (
            <li key={tag.id} className="tag">
              <span className="tag_title">#{tag.label}</span>
              <button className="tag_icon" onClick={() => removeTag(tag.id)}>
                <XIcon />
              </button>
            </li>
          ))}
        </ol>
      </TagStyle>
    </li>
  );
}

const TagStyle = styled.div`
  .input_style {
    margin-bottom: ${pxToRem(14)};
  }

  .tags {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: ${pxToRem(12)};
  }

  .tag {
    ${flexCenter}
    line-height: ${pxToRem(36)};
    background-color: var(--gray-100);
    padding: 0 1rem;
    border-radius: ${pxToRem(26)};
  }

  .tag_icon {
    background-color: transparent;
  }
`;
