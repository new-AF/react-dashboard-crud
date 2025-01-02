import { useEffect } from "react";
import { Row } from "./Row";

import "./Table.css";

const exampleObject = () => {
    const value = Math.random() + "";
    return {
        Name: `User ${value[2]}`,
        Email: `User-${value[2]}@example.com`,
    };
};

export const Table = ({ example }) => {
    const array = Array(5).fill(1).map(exampleObject);

    const headerValues = Object.keys(array[0]).concat(["Actions"]);
    const headerCells = headerValues.map((value) => (
        <th className={value}>{value}</th>
    ));

    const dataCells = array.map((obj) => <Row obj={obj} />);

    return (
        <table>
            <thead>
                <tr>{headerCells}</tr>
            </thead>
            <tbody>{dataCells}</tbody>
        </table>
    );
};
