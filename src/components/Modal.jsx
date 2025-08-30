import React from 'react';
import { createPortal } from "react-dom";
import { FaWindowClose } from "react-icons/fa";

const Modal = ({onClose, isOpen, children }) => {
  return createPortal(
    <>
        {isOpen && 
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative bg-white p-4 rounded-lg shadow-lg min-h-[200px] max-w-[500px] w-full">
                <div className="flex justify-end">
                  <FaWindowClose onClick={onClose} className="text-2xl cursor-pointer" />
                </div>
                {children}
              </div>
            </div>

            <div className="fixed inset-0 z-40 h-screen w-screen backdrop-blur" />

        </>}
    </>
  ,document.getElementById("modal-root"));
}

export default Modal