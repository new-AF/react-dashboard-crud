import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

import "./Control.css";

export const Control = ({ className = "control" }) => {
    return (
        <td className={className}>
            <EditButton />
            <DeleteButton />
        </td>
    );
};

export const appendControl = (array) => {
    array.push(<Control />);
};
