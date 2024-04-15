import React from "react";

const CardFeedback: React.FC = () => {
  return (
    <div className="card w-96 bg-custom-blue shadow-xl m-9">
      <div className="bg-custom-purple h-10 w-auto rounded"></div>
      <div className="card-body">
        <div className="relative h-24 w-auto overflow-hidden">
          <div className="bg-custom-teste opacity-20 absolute inset-0 ml-6 h-36"></div>
          <div className="flex items-center justify-center">
            <div className="text-container p-4 ml-6">
              <span className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit distinctio odit
              </span>
            </div>
          </div>
        </div>

        <div className="card-actions justify-start mt-6">
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              defaultChecked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFeedback;
