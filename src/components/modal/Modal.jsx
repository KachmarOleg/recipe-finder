import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";

export default function Modal({ children, open, setModal }) {
  const dialog = useRef();

  useEffect(() => {
    if (open === true) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  }

  return createPortal(
    <dialog
      ref={dialog}
      onClick={handleBackdropClick}
      onClose={() => setModal(false)}
    >
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
}
