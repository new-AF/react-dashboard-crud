import { useEffect } from "react";
import { Row } from "./Row";

import "./Table.css";

export const Table = ({ arrayOfObjects }) => {
    const array = arrayOfObjects;

    const headerNames = Object.keys(array[0] || {}).concat(["Actions"]);
    headerNames.unshift("ID");

    const headerCells = headerNames.map((value) => (
        <th className={value}>{value}</th>
    ));

    const dataCells = array.map((obj, index) => (
        <Row id={index + 1} obj={obj} />
    ));

    return (
        <table>
            <thead>
                <tr>{headerCells}</tr>
            </thead>
            <tbody>{dataCells}</tbody>
        </table>
    );
};
