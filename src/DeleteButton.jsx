import { SVG } from "./SVG";

export const DeleteButton = ({ title = "Delete", onClick }) => {
    return (
        <button className="delete" onClick={onClick}>
            <SVG path="/trash-can-solid.svg" /> {title}
        </button>
    );
};
