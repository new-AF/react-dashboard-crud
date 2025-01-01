import { SVG } from "./SVG";

export const DeleteButton = ({ title = "Delete" }) => {
    return (
        <button className="delete">
            <SVG path="/trash-can-solid.svg" /> {title}
        </button>
    );
};
