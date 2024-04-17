import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 flex z-40 items-center justify-center">
        <div
          className="modal-overlay fixed inset-0 z-40 bg-black opacity-50"
          onClick={onClose}
        ></div>
        <div className="modal-container rounded-lg z-50 overflow-y-auto">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
