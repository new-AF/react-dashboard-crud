/*  */
export const Row = ({ obj }) => {
    const elements = Object.entries(obj).map(([key, value]) => (
        <td>{value}</td>
    ));
    return <tr>{elements}</tr>;
};
