import CardFeedback from "../CardFeedback";
import NewFeedback from "../NewFeedback";
import useModal from "../../hooks/useModal";
import Modal from "../Modal";

const FormFeedback: React.FC = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <div>
      <div className="bg-custom-blue overflow-hidden flex justify-center items-center mt-1">
        <div className="carousel carousel-center rounded-box grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt">
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
          <CardFeedback />
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
        <NewFeedback onClose={handleModalClose} />
      </Modal>
    </div>
  );
};

export default FormFeedback;
