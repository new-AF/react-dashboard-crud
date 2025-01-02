/*  */

import { TableActions } from "./TableActions";

import "./Row.css";

export const Row = ({ className = "row", obj }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));

    elements.push(<TableActions />);

    return <tr className={className}>{elements}</tr>;
};
