export default function TableBody({ table, tableKeys }) {
    return (
        <tbody>
            {table.map((answer, index) => {
                const values = tableKeys.map((k, idx) => {
                    return (
                        <td
                            key={idx}
                            className="mr-2 text-black py-3 px-5"
                            style={{
                                border: "1px solid black",
                                textAlign: "center",
                            }}
                        >
                            {answer[k]}
                        </td>
                    );
                });
                return (
                    <tr key={index} style={{ width: "100%" }}>
                        {[...values]}
                    </tr>
                );
            })}
        </tbody>
    );
}
