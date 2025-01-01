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
    const elements = array.map((obj) => <Row obj={obj} />);
    return (
        <table>
            <tbody>{elements}</tbody>
        </table>
    );
};
