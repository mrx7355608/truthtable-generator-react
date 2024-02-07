import TableBody from "./TableBody";
import TableHead from "./TableHead";
import CopyButton from "./CopyButton";

export default function Table({ table }) {
    const tableKeys = Object.keys(table[0]);

    return (
        <div className="w-full my-8">
            <table
                id="truth-table"
                className="table-auto border-collapse mx-auto"
            >
                <TableHead tableKeys={tableKeys} />
                <TableBody table={table} tableKeys={tableKeys} />
            </table>
            <CopyButton />
        </div>
    );
}
