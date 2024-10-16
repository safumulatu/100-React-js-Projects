import { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  //check if the given array index is enoug for it
  const checkNumber = (num) => {
    if (num > people.lenghth - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  //the function for next person
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  //the functionality for the previes or return person
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //the functionality for the random person
  const RandomPerson = () => {
    let RandomNumber = Math.floor(Math.random() * people.length);
    if (RandomNumber === index) {
      RandomNumber = index + 1;
    }
    setIndex(RandomNumber);
  };
  return (
    <div>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            {/* <FontAwesomeIcon icon="fa-solid fa-quotes" /> */}
            <FaQuoteRight />
          </span>
        </div>
        <div className="author">{name}</div>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronLeft />
          </button>
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={RandomPerson}>
          Random!
        </button>
      </article>
    </div>
  );
}
export default Review;
