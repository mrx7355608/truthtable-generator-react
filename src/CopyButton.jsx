export default function CopyButton() {
    return (
        <button
            className="btn btn-primary w-1/4 mx-auto block my-5"
            onClick={() => copyTable("truth-table")}
        >
            Copy
        </button>
    );

    function copyTable() {
        var table = document.getElementById("truth-table");
        var range = document.createRange();
        range.selectNode(table);
        window.getSelection().addRange(range);

        const success = document.execCommand("copy");
        if (!success) {
            alert("Unable to copy");
        } else {
            alert("Copied to clipboard!");
        }
        window.getSelection().removeAllRanges();
    }
}
