import { HiArrowLeft } from "react-icons/hi";
import React, { useState } from "react";

interface NewFeedbackProps {
  onClose: () => void;
  addFeedback: (newFeedback: { message: string; rating: number }) => void;
}

const NewFeedback: React.FC<NewFeedbackProps> = ({ onClose, addFeedback }) => {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(3);

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRating = parseInt(event.target.value);
    setRating(newRating);
  };

  const handleFeedbackChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    addFeedback({ message, rating });
    onClose();
  };

  return (
    <>
      <div className="bg-base-300 w-auto h-14 flex items-center gap-4 justify-start">
        <button className="btn bg-base-300 m-0" onClick={onClose}>
          <HiArrowLeft className="size-6" />
        </button>
        <span className="text-center">Feedback</span>
      </div>
      <div className="modal-content bg-base-200 p-5 flex flex-col items-center">
        <p className="py-4 text-left w-96">
          Compartilhe suas experiências, sugestões ou preocupações sobre
          diversidade e inclusão, e outras questões relacionadas ao ambiente de
          trabalho
        </p>
        <div className="rating mt-6">
          <input
            type="radio"
            name="rating"
            className="mask mask-star"
            value={1}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star"
            value={2}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star"
            value={3}
            onChange={handleRatingChange}
            defaultChecked
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star"
            value={4}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating"
            className="mask mask-star"
            value={5}
            onChange={handleRatingChange}
          />
        </div>
        <textarea
          className="textarea textarea-bordered text-black w-96 h-32 mt-10 mb-10 bg-white border rounded-md px-3 py-2 resize-none"
          placeholder="Digite seu feedback aqui"
          value={message}
          onChange={handleFeedbackChange}
        ></textarea>
        <div className="modal-action mt-4">
          <button
            className="btn rounded-full h-10 w-96 bg-base-300"
            onClick={handleSubmit}
          >
            Send Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default NewFeedback;
