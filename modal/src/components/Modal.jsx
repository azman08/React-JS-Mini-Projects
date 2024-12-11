import { useState } from "react";

const Modal = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const openModel = () => setIsModelOpen(true);
  const closeModal = () => setIsModelOpen(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <button
        className="bg-black rounded-full text-white px-6 py-2 hover:bg-white hover:text-black hover:border-black hover:border-2 transition-all duration-200"
        onClick={openModel}
      >
        Open
      </button>

      {/* Modal Open */}
      {isModelOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h1 className="text-lg font-bold">Hi, I am a Modal!</h1>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded  transition duration-200"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
