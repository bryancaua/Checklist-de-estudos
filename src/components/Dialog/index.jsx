import { useEffect, useRef } from 'react';
import './dialog-style.css';

export function Dialog( {isOpen, onClose} ) {
    const dialogRef = useRef(null);

    useEffect(() => {
      console.log("A modal deveria estar aberta ?", isOpen);

      if (isOpen) {
        openDialog();
      } else {
        closeDialog();
      }
    }, [isOpen])

    const openDialog = () => {
        dialogRef.current.showModal();
    }

    const closeDialog = () => {
        dialogRef.current.close();
    }


  return (
    <>
      <dialog ref={dialogRef}>
        <button autoFocus onClick={onClose}>Close</button>
        <p>meu Modal!</p>
      </dialog>
    </>
  );
}
