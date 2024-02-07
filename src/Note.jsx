export default function Note() {
    const notes = [
        "It only supports AND, OR and NOT gates",
        "Use . (dot) for AND operations",
        "Use + (plus) for OR operations",
        "Use ! (exclamation) for NOT operations",
        "Use parenthesis/round brackets properly or you may get un-expected results or in worst case, an error",
        "Example: !(A.B) + B.C",
    ];
    return (
        <ul className="list-disc p-5 mt-5 bg-indigo-200 rounded-lg">
            {notes.map((note, index) => {
                return (
                    <li className="ml-5" key={index}>
                        {note}
                    </li>
                );
            })}
        </ul>
    );
}
