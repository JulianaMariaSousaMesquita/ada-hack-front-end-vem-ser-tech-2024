import { HiArrowLeft } from "react-icons/hi";

interface NewFeedbackProps {
  onClose: () => void;
}

const NewFeedback: React.FC<NewFeedbackProps> = ({ onClose }) => {
  return (
    <>
      <div className="bg-base-300 w-auto h-14 flex items-center gap-4 justify-start">
        <button className="btn bg-base-300 m-0" onClick={onClose}>
          <HiArrowLeft className="size-6"/>
        </button>
        <span className="text-center">Feedback</span>
      </div>
      <div className="modal-content bg-base-200 p-5 flex flex-col items-center">
        <p className="py-4 text-left w-96">
          Compartilhe suas experiências, sugestões ou preocupações sobre
          diversidade e inclusão , e outras questões relacionadas ao ambiente de
          trabalho
        </p>
        <div className="rating mt-6">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            checked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
        <textarea
          className="textarea textarea-bordered text-primary w-96 h-32 mt-10 mb-10 bg-neutral border rounded-md px-3 py-2 resize-none"
          placeholder="Digite seu feedback aqui"
        ></textarea>
        <div className="modal-action mt-4">
          <button
            className="btn rounded-full h-10 w-96 bg-base-300"
            onClick={onClose}
          >
            Send Feedback
          </button>
        </div>
      </div>
    </>
  );
};

export default NewFeedback;
