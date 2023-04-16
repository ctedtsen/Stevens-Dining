import React, { useState, useRef, useEffect, useCallback } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    {
      name: "Pierce Dining Hall",
      url: "https://www.stevensdining.com/wp-content/uploads/2020/08/Pierce-Photo-scaled-e1620153827402-1536x649.jpg",
      linkName: "pierce",
    },
    {
      name: "Pierce Cafe",
      url: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2FOUV8PdrYVTyR4E6N43zrl%2F16a1cffae8f6a3b915cac1e35355c4c9%2FDSCF1308.jpg%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
      linkName: "piercecafe",
    },
    {
      name: "America's Cup",
      url: "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/189/616/large/Red_gray.jpg?1511324205",
      linkName: "america",
    },
    {
      name: "Gateway Cafe",
      url: "https://www.stevens.edu/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fmviowpldu823%2F3u1j1fbjJe1D2HGaxeqWU0%2F435b90df29dc5063098c81804791ae4f%2Fnewcafe.jpg%3Fw%3D640%26h%3D360%26f%3Dcenter%26q%3D80%26fit%3Dfill&w=2400&q=80",
      linkName: "gateway",
    },
    {
      name: "Grill Nation",
      url: "https://www.stevensdining.com/wp-content/uploads/2022/09/1-1-e1663099635784-1536x357.jpg",
      linkName: "grill",
    },
    {
      name: "Sono",
      url: "https://www.stevensdining.com/wp-content/uploads/2022/09/3-1-e1663099776756-1536x411.jpg",
      linkName: "sono",
    },
    {
      name: "The Halal Stall",
      url: "https://www.stevensdining.com/wp-content/uploads/2022/09/8-1-e1663099890551-1536x346.jpg",
      linkName: "halal",
    },
    {
      name: "Piccola Italia",
      url: "https://www.stevensdining.com/wp-content/uploads/2022/09/7-1-e1663099991652-1536x353.jpg",
      linkName: "italia",
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const timerRef = useRef();

  const handleLeftArrowClick = () => {
    let newSlideIndex;
    if (currentSlideIndex === 0) {
      newSlideIndex = images.length - 1;
    } else {
      newSlideIndex = currentSlideIndex - 1;
    }
    setCurrentSlideIndex(newSlideIndex);
  };

  const handleRightArrowClick = useCallback(() => {
    let newSlideIndex;
    if (currentSlideIndex === images.length - 1) {
      newSlideIndex = 0;
    } else {
      newSlideIndex = currentSlideIndex + 1;
    }
    setCurrentSlideIndex(newSlideIndex);
  }, [currentSlideIndex, images]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      handleRightArrowClick();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [handleRightArrowClick]);

  return (
    <body>
      <div className="title">
        <h1>Stevens Dining</h1>
      </div>

      <div className="slide-show-div">
        <div className="slide-div">
          <Link to={`/${images[currentSlideIndex].linkName}`}>
            <img
              src={images[currentSlideIndex].url}
              alt={images[currentSlideIndex].name}
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
          <h2 className="h2-txt">{images[currentSlideIndex].name}</h2>
        </div>
      </div>
      <div className="dining-div">
        <h2>Options:</h2>
        <p>
          <Link to="/pierce">Pierce Dining Hall</Link>
        </p>
        <p>
          <Link to="/piercecafe">Pierce Cafe</Link>
        </p>
        <p>
          <Link to="/america">America's Cup</Link>
        </p>
        <p>
          <Link to="/gateway">Gateway Cafe</Link>
        </p>
        <p>
          <Link to="/grill">Grill Nation</Link>
        </p>
        <p>
          <Link to="/sono">Sono</Link>
        </p>
        <p>
          <Link to="/halal">The Halal Stall</Link>
        </p>
        <p>
          <Link to="/italia">Piccola Italia</Link>
        </p>
      </div>
    </body>
  );
};

export default Home;
