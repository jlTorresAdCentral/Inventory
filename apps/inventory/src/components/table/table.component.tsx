import { rowEven, rowOdd, tableContainer } from "../../assets/styles/table.component.css";

interface TableComponentProps {
    columns: string[]
    rows: string[][]
}

const TableComponent = (props: TableComponentProps) => {
    return (
        <div className={tableContainer}>
            <table>
                <thead>
                    {props.columns.map((column) => (
                        <th>
                            <p>{column}</p>
                        </th>
                    ))}
                </thead>
                <tbody>
                    {props.rows.map((row, index) => (
                        <tr
                            className={index % 2 == 0 ? rowEven : rowOdd}
                        >
                            {row.map((rowColumn) => (
                                <td>
                                    <p>{rowColumn}</p>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableComponent;