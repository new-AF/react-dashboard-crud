/*  */

import { appendControlCell } from "./ControlCell";

export const Row = ({ obj }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));

    appendControlCell(elements);

    return <tr>{elements}</tr>;
};
