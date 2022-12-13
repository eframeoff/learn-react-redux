import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const rootCl = [cl.Modal];

  if (visible) {
    rootCl.push(cl.active);
  }

  return (
    <div className={rootCl.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
