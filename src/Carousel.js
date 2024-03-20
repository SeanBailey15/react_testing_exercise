import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }) {
  // Card state using an index that will refer to a photo from the photos array
  const [currCardIdx, setCurrCardIdx] = useState(0);

  // Current card: a photo index determined by state
  const currCard = photos[currCardIdx];
  // Total: determined by the photos array length
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  // FIX FOR BUG: LEFT ARROW WOULD GO FORWARD INSTEAD OF BACK
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx != 0 && (
          <i className="bi bi-arrow-left-circle" onClick={goBack} />
        )}
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {currCardIdx != total - 1 && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;
