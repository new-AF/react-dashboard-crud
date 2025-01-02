import { useEffect } from "react";
import { Row } from "./Row";

import "./Table.css";

export const Table = ({
    arrayOfObjects,
    actionFunctions: { addUser, deleteUser },
}) => {
    const array = arrayOfObjects;

    const headerNames = Object.keys(array[0] || {}).concat(["Actions"]);

    const headers = headerNames.map((value) => (
        <th className={value}>{value}</th>
    ));

    const rows = array.map((obj, index) => (
        <Row id={index} obj={obj} deleteUser={deleteUser} />
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
};
