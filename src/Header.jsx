import { useState, useEffect } from "react";

import { SVG } from "./SVG";

import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="title">Dashboard</h1>

                <ul className="list">
                    <li>
                        <AddNewUserButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

const AddNewUserButton = ({
    hideClassName = "hide-modal",
    title = "Add New User",
    className,
}) => {
    const [state, setState] = useState({ onClick: undefined });

    useEffect(() => {
        const modal = document.querySelector(".modal");
        const onClose = (event) => {
            modal.classList.remove(hideClassName);
        };
        setState({ onClick: onClose });
    }, []);

    return (
        <button className={className} onClick={state.onClick}>
            <SVG path="/user-plus-solid.svg" />
            <span>{title}</span>
        </button>
    );
};
