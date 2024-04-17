import React from "react";

interface CardFeedbackProps {
  message: string;
  rating: number;
}

const CardFeedback: React.FC<CardFeedbackProps> = ({ message, rating }) => {
  const totalStars = 5;

  return (
    <div className="card w-full lg:w-96 bg-custom-blue shadow-xl mb-9">
      <div className="bg-base-200 h-10 w-auto rounded"></div>
      <div className="card-body bg-base-200">
        <div className="relative h-24 w-auto overflow-hidden">
          <div className=" opacity-20 absolute inset-0 ml-6 h-36"></div>
          <div className="flex items-center justify-center">
            <div className="text-container  mx-auto ">
              <span className="text-secundary w-full  text-justify text-sm lg:text-xl ">
                {message}
              </span>
            </div>
          </div>
        </div>
        <div className="card-actions justify-start mt-6 ">
          <div className="rating ">
            {[...Array(totalStars)].map((star, index) => {
              const currentRating = index + 1;

              return (
                <span
                  key={star}
                  className={`text-3xl ${
                    currentRating <= rating ? "text-white" : "text-gray-400"
                  }`}
                >
                  &#9733;
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeedback;
