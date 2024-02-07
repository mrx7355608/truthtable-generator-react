export default function TableHead({ tableKeys }) {
    return (
        <thead>
            <tr>
                {tableKeys.map((k) => {
                    return (
                        <th
                            className="font-bold text-black py-3 px-5"
                            style={{ border: "1px solid black" }}
                            key={k}
                        >
                            {k.toUpperCase()}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
