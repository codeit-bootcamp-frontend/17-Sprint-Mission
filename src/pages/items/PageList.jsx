import LArrow from "@/assets/ic_arrow_left_active.svg";
import RArrow from "@/assets/ic_arrow_right_active.svg";
import { flexCenter } from "@/styles/commonStyle";
import { pxToRem } from "@/utils/pxToRem";
import styled from "styled-components";

export default function PageList({ totalCount, page, setPage, getAllList }) {
  const PAGE_GROUP = 5;

  const totalPages = Math.ceil(totalCount / getAllList());

  const groupStart = Math.floor((page - 1) / PAGE_GROUP) * PAGE_GROUP + 1;
  const groupEnd = Math.min(groupStart + PAGE_GROUP - 1, totalPages);

  const prevGroup = groupStart > 1;
  const nextGroup = groupEnd < totalPages;

  const goPrevGroup = () => {
    if (!prevGroup) return;
    setPage(groupStart - PAGE_GROUP);
  };

  const goNextGroup = () => {
    if (!nextGroup) return;
    setPage(groupEnd + 1);
  };

  return (
    <PageListStyle>
      <ol className="pages_list">
        <li className="page_list">
          <button
            className="page_btn arrow"
            onClick={goPrevGroup}
            disabled={!prevGroup}
          >
            <LArrow className="page_arrow_img" />
          </button>
        </li>
        {Array.from({ length: groupEnd - groupStart + 1 }, (_, i) => {
          const PageIndex = groupStart + i;
          return (
            <li key={PageIndex} className="page_list">
              <button
                className={`page_btn ${PageIndex === page ? "active" : ""}`}
                onClick={() => setPage(PageIndex)}
              >
                {PageIndex}
              </button>
            </li>
          );
        })}
        <li className="page_list">
          <button
            className="page_btn arrow"
            onClick={goNextGroup}
            disabled={!nextGroup}
          >
            <RArrow className="page_arrow_img" />
          </button>
        </li>
      </ol>
    </PageListStyle>
  );
}

const PageListStyle = styled.div`
  .pages_list {
    ${flexCenter}
    gap: ${pxToRem(4)};
  }

  .page_btn {
    ${flexCenter}
    border: 1px solid var(--gray-200);
  }

  .page_arrow_img > path {
    transform: translate(${pxToRem(0.6)}, ${pxToRem(0.6)});
  }

  .page_list,
  .page_btn {
    outline: none;
    width: ${pxToRem(40)};
    height: ${pxToRem(40)};
    border-radius: 50%;
    background-color: #fff;
  }

  .page_list:hover .page_btn,
  .active {
    background-color: var(--primary-100);
    color: #fff;
  }
  .page_list:hover .page_btn.arrow {
    background-color: transparent;
  }
`;
