import { SVG } from "./SVG";

import "./Modal.css";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Modal = ({ children }) => {
    return (
        <div className="modal hide-modal">
            <div className="window">
                <WindowControls />
                <div className="window-main">{children}</div>
            </div>
        </div>
    );
};

const CloseButton = ({
    hideClassName = "hide-modal",
    title = "Close",
    className = "close",
}) => {
    const [state, setState] = useState({ onClick: undefined });

    useEffect(() => {
        const modal = document.querySelector(".modal");
        const onClose = (event) => {
            modal.classList.add(hideClassName);
        };
        setState({ onClick: onClose });
    }, []);

    return (
        <button className={className} onClick={state.onClick}>
            <SVG path="/xmark-solid.svg" />
            <span>{title}</span>
        </button>
    );
};

const WindowControls = ({}) => {
    return (
        <div className="window-controls">
            <CloseButton />
        </div>
    );
};
