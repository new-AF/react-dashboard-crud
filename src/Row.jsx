/*  */

import { appendControl } from "./Control";

export const Row = ({ obj }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));

    appendControl(elements);

    return <tr>{elements}</tr>;
};
