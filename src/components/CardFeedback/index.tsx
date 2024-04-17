import React from "react";

interface CardFeedbackProps {
  message: string;
  rating: number;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({ message, rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <input
          key={i}
          type="radio"
          name="rating"
          className={`mask mask-star ${i < rating ? "checked" : ""}`}
        />
      );
    }
    return stars;
  };

  return (
    <div className="card w-48 lg:w-96 bg-custom-blue shadow-xl m-9">
      <div className="bg-custom-purple h-10 w-auto rounded"></div>
      <div className="card-body">
        <div className="relative h-24 w-auto overflow-hidden">
          <div className="bg-custom-teste opacity-20 absolute inset-0 ml-6 h-36"></div>
          <div className="flex items-center justify-center">
            <div className="text-container  mx-auto ">
              <span className="text-secundary w-full  text-justify text-sm lg:text-xl ">
                {message}
              </span>
            </div>
          </div>
        </div>
        <div className="card-actions justify-start mt-6 ">
          <div className="rating ">{renderStars()}</div>
        </div>
      </div>
    </div>
  );
};

export default CardFeedback;
