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
      {
        message: "Sinto-me valorizado e respeitado por colegas e superiores",
        rating: 5,
      },
      {
        message:
          "A empresa promove um ambiente acolhedor para todos os funcionários",
        rating: 4,
      },
      {
        message:
          "Há oportunidades de crescimento para pessoas de diferentes origens e identidades",
        rating: 4,
      },
      {
        message:
          "A diversidade é celebrada e reconhecida como um valor fundamental da empresa",
        rating: 5,
      },
      {
        message:
          "A empresa precisa melhorar seu programa de inclusão e diversidade",
        rating: 3,
      },
      {
        message:
          "Ainda há casos de preconceito e discriminação que precisam ser abordados",
        rating: 2,
      },
      {
        message:
          "Fui maltratado por colegas de trabalho devido à minha identidade de gênero",
        rating: 1,
      },
    ];
    setFeedbackData(initialFeedbackData);
  }, []);

  const addFeedback = (newFeedback: FeedbackData) => {
    setFeedbackData([...feedbackData, newFeedback]);
  };

  return (
    <div>
      <div className="overflow-hidden flex justify-center items-center mt-1">
        <div className="flex flex-wrap justify-center items-center gap-6 px-4">
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
