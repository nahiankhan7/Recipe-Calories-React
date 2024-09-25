const Modal = () => {
  return (
    <div
      id="modal"
      className="bg-gray-900 p-4 rounded-lg border border-gray-700 shadow-lg fixed top-4 right-4 z-50 opacity-0 transform translate-y-[-20px] transition-all duration-300 hidden">
      <p className="text-xl text-white font-medium">Already Exists</p>
      <p className="mt-2 text-gray-300 text-center">
        You already have this in your inventory.
      </p>
    </div>
  );
};

export default Modal;
