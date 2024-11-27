import React, { useState } from "react";
import image1 from "../Images/image1.jpeg";
import image2 from "../Images/image2.jpeg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpeg";
import image5 from "../Images/image5.jpeg";

const About = () => {
  // Define your carousel images
  const carouselImages = [image1, image2, image3, image4, image5];

  // State to keep track of the current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle moving to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? prevIndex : prevIndex + 1
    );
  };

  // Function to handle moving to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  return (
    <>
      <div className="flex gap-1">
        <button className="mr-5" onClick={prevSlide}>
          Prev
        </button>
        {/* Display the current image */}
        <div className="flex gap-1">
          <img  class="m-4 p-4 w-[220px] h-120 rounded-lg "
            src={carouselImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          {/* {currentIndex !== carouselImages.length - 1 && ( // Only render next image if currentIndex is not the last image
            <img class="m-4 p-4 w-[220px] h-120 rounded-lg "
              src={carouselImages[currentIndex + 1]}
              alt={`Slide ${currentIndex + 2}`}
            />
          )}
       */}
        </div>
        <button className="ml-15" onClick={nextSlide}>
          Next
        </button>
      </div>
    </>
  );
};

export default About;
