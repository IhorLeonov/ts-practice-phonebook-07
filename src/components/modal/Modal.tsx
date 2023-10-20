import { Overlay, ModalBox } from 'components/modal/Modal.styled';
import { createPortal } from 'react-dom';
import { FC, ReactNode, useEffect } from 'react';
import { toggleModal } from 'redux/contactsSlice';
import { useAppDispatch } from 'redux/store';

const modalRoot = document.querySelector('#modal-root') as Element;

interface ModalProps {
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const handleToggleModal = () => dispatch(toggleModal(''));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        handleToggleModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <Overlay>
      <ModalBox>{children}</ModalBox>
    </Overlay>,
    modalRoot
  );
};
