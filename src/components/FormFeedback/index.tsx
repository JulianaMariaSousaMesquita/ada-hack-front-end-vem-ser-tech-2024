import CardFeedback from "../CardFeedback";
import NewFeedback from "../NewFeedback";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import { useState, useEffect } from "react";

interface FeedbackData {
  message: string;
  rating: number;
}

const FormFeedback: React.FC = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([]);

  useEffect(() => {
    const initialFeedbackData: FeedbackData[] = [
      { message: "Ótimo produto!", rating: 5 },
      { message: "Adorei o atendimento!", rating: 4 },
      { message: "Poderia ser melhor.", rating: 3 },
      { message: "Excelente serviço!", rating: 5 },
      { message: "Recomendo!", rating: 4 },
      { message: "Nunca mais compro aqui!", rating: 1 },
    ];
    setFeedbackData(initialFeedbackData);
  }, []);

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackData([...feedbackData, newFeedback]);
  };

  return (
    <div>
      <div className="bg-custom-blue overflow-hidden flex justify-center items-center mt-1">
        <div className="carousel carousel-center rounded-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt">
          {feedbackData.map((feedback, index) => (
            <CardFeedback
              key={index}
              message={feedback.message}
              rating={feedback.rating}
            />
          ))}
        </div>
      </div>
      <div className="bg-custom-blue overflow-hidden flex justify-center items-center h-40">
        <button
          className="btn bg-custom-purple rounded-full h-5 w-96"
          onClick={handleModalOpen}
        >
          <span className="text-white">Adicionar Feedback</span>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <NewFeedback onClose={handleModalClose} addFeedback={addFeedback} />
      </Modal>
    </div>
  );
};

export default FormFeedback;
