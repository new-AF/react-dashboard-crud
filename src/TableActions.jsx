import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

import "./TableActions.css";

export const TableActions = ({ className = "actions", id, deleteUser }) => {
    return (
        <td className={className}>
            <EditButton />
            <DeleteButton onClick={(e) => deleteUser(id)} />
        </td>
    );
};
