/*  */

import { appendControl } from "./Control";

import "./Row.css";

export const Row = ({ className = "row", obj }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));

    appendControl(elements);

    return <tr className={className}>{elements}</tr>;
};
