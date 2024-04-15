import React from 'react';

interface NewFeedbackProps {
    isOpen: boolean;
    onClose: () => void;
}

const NewFeedback: React.FC<NewFeedbackProps> = ({ isOpen, onClose }) => {
    return (
        isOpen && (
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="modal-overlay fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
                <div className="modal-container bg-base-100 w-11/12 max-w-5xl rounded-lg z-50 overflow-y-auto">
                    <div className='bg-base-300 w-auto h-14 flex items-center gap-4 justify-start'>
                        <button className="btn bg-base-300 m-0" onClick={onClose}>
                            <img src="https://cdn-icons-png.flaticon.com/128/467/467272.png" width={30} alt="" />
                        </button>
                        <span className='text-center'>
                            Feedback 
                        </span>
                    </div>
                    <div className="modal-content p-5 flex flex-col items-center">
                        <p className="py-4 text-left w-96">Compartilhe suas experiências, sugestões ou preocupações sobre diversidade e inclusão
                            , e outras questões relacionadas ao ambiente de trabalho
                        </p>
                        <div className="rating mt-6">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <textarea className="textarea textarea-bordered text-black w-96 h-32 mt-10 mb-10 bg-white border rounded-md px-3 py-2 resize-none" placeholder="Digite seu feedback aqui"></textarea>
                        <div className="modal-action mt-4">
                            <button className="btn rounded-full h-10 w-96 bg-base-300" onClick={onClose}>Send Feedback</button> 
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default NewFeedback;