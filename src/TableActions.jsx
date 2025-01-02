import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

import "./TableActions.css";

export const TableActions = ({ className = "actions" }) => {
    return (
        <td className={className}>
            <EditButton />
            <DeleteButton />
        </td>
    );
};
