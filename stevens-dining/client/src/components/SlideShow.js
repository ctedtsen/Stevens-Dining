import React, { useState, useRef, useEffect, useCallback } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SlideShow(props){
    const dining_locations = props.dining_locations;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const timerRef = useRef();
  
    const handleLeftArrowClick = () => {
      let newSlideIndex;
      if (currentSlideIndex === 0) {
        newSlideIndex = dining_locations.length - 1;
      } else {
        newSlideIndex = currentSlideIndex - 1;
      }
      setCurrentSlideIndex(newSlideIndex);
    };
  
    const handleRightArrowClick = useCallback(() => {
      let newSlideIndex;
      if (currentSlideIndex === dining_locations.length - 1) {
        newSlideIndex = 0;
      } else {
        newSlideIndex = currentSlideIndex + 1;
      }
      setCurrentSlideIndex(newSlideIndex);
    }, [currentSlideIndex, dining_locations]);
  
    useEffect(() => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        handleRightArrowClick();
      }, 4000);
  
      return () => clearTimeout(timerRef.current);
    }, [handleRightArrowClick]);

    return(<>
    <div className="slide-show-div">
        <div className="slide-div">
          <Link to={dining_locations[currentSlideIndex].link}>
            <img
              src={dining_locations[currentSlideIndex].img}
              alt={dining_locations[currentSlideIndex].name}
            ></img>
          </Link>

          <div className="left-arrow">
            <button onClick={handleLeftArrowClick}>&#60;</button>
          </div>

          <div className="right-arrow">
            <button onClick={handleRightArrowClick}>&#62;</button>
          </div>
        </div>
        <div className="img-title">
          <h2 className="h2-txt">{dining_locations[currentSlideIndex].name}</h2>
        </div>
      </div></>)
}

export default SlideShow;