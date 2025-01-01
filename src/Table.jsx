import { Row } from "./Row";

import "./Table.css";

const exampleObject = () => {
    const value = Math.random() + "";
    return {
        name: `User ${value[2]}`,
        email: `User-${value[2]}@example.com`,
    };
};

export const Table = ({ example }) => {
    const array = Array(5).fill(1).map(exampleObject);

    const headerCells = Object.keys(array[0]).map((value) => <th>{value}</th>);

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
