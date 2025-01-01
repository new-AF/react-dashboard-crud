import { SVG } from "./SVG";

export const EditButton = ({ title = "Edit" }) => {
    return (
        <button className="edit">
            <SVG path="/pencil-solid.svg" /> {title}
        </button>
    );
};
