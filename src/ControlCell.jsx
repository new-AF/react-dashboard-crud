import { EditButton } from "./EditButton";
import { DeleteButton } from "./DeleteButton";

export const ControlCell = ({ className = "control" }) => {
    return (
        <td className={className}>
            <EditButton />
            <DeleteButton />
        </td>
    );
};

export const appendControlCell = (array) => {
    array.push(<ControlCell />);
};
