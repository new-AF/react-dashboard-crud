/*  */

import { TableActions } from "./TableActions";

import "./Row.css";

export const Row = ({ className = "row", obj, deleteUser }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));

    const { id } = obj;

    elements.push(<TableActions id={id} deleteUser={deleteUser} />);

    return <tr className={className}>{elements}</tr>;
};
