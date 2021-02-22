import React, { useContext } from "react";

import { ModalContext } from "../../contexts/ModalContext";

const Modal = ({ className, onHide, children }) => {
    const { show, setShow } = useContext(ModalContext);

    return (
        <div
            className={`backdrop${show ? " show" : ""} ${className ? className : ""}`}
            onClick={() => {
                onHide && onHide();
                setShow(false);
            }}
        >
            <div className="modal" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
