import { jsx as _jsx } from "react/jsx-runtime";
import { Overlay, ModalBox } from 'components/modal/Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { toggleModal } from 'redux/contactsSlice';
import { useAppDispatch } from 'redux/store';
const modalRoot = document.querySelector('#modal-root');
export const Modal = ({ children }) => {
    const dispatch = useAppDispatch();
    const handleToggleModal = () => dispatch(toggleModal(''));
    useEffect(() => {
        const handleKeyDown = (e) => {
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
    return createPortal(_jsx(Overlay, { children: _jsx(ModalBox, { children: children }) }), modalRoot);
};
//# sourceMappingURL=Modal.js.map