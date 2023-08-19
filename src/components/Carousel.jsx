import { useState, useEffect, Children, cloneElement } from "react";
import "./Carousel.css";

const PAGE_WIDTH = 320;

const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    setOffset((currentOffser) => {
      const newOffset = currentOffser - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="window">
          <div
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
      </div>
      <div className="wrapperButton">
        <button
          className="button"
          onClick={handleLeftArrowClick}
        >
          НАЗАД
        </button>
        <button
          className="button"
          onClick={handleRightArrowClick}
        >
          ВПЕРЕД
        </button>
      </div>
    </>
  );
};

export default Carousel;
