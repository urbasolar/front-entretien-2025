import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/pro-regular-svg-icons';

import { TCarouselProps } from './carousel.type';

export const Carousel: FC<TCarouselProps> = (props: TCarouselProps) => {
  const {
    children,
    className,
    activeIndex,
    onChange,
    childrenClassName,
    customBtns,
  } = props;
  const [displayed, setDisplayed] = useState({
    current: activeIndex || 0,
    display: children[activeIndex || 0],
  });

  const handleClickNext = () => {
    if (displayed.current < children.length - 1) {
      setDisplayed((prevState) => ({
        current: prevState.current + 1,
        display: children[prevState.current + 1],
      }));
      if (onChange && activeIndex !== undefined) {
        onChange(activeIndex + 1);
      }
    }
  };

  const handleClickPrev = () => {
    if (displayed.current > 0) {
      setDisplayed((prevState) => ({
        current: prevState.current - 1,
        display: children[prevState.current - 1],
      }));
      if (onChange && activeIndex !== undefined) {
        onChange(activeIndex - 1);
      }
    }
  };

  useEffect(() => {
    if (activeIndex === undefined) return;
    setDisplayed({
      current: activeIndex,
      display: children[activeIndex],
    });
  }, [activeIndex, children]);

  return (
    <div
      id="carousel-container"
      className={`w-full ${className} ${
        customBtns ? 'flex flex-col items-center' : ''
      }`}
    >
      <div className="overflow-hidden h-full w-full">
        <div id="btn-container" className="flex justify-between pb-3">
          {!customBtns && (
            <>
              <button
                className="text-white duration-200 p-1 text-sm rounded-full hover:border-primary hover:text-primary"
                onClick={handleClickPrev}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="text-white duration-200 p-1 text-sm rounded-full hover:border-primary hover:text-primary"
                onClick={handleClickNext}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </>
          )}
        </div>
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${displayed.current * 100}%)` }}
        >
          {children.map((item, index) => (
            <div
              key={`child-${index}`}
              className={`w-full flex-shrink-0 ${childrenClassName}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {customBtns}
    </div>
  );
};
