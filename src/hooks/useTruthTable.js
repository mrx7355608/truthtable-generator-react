import { useState } from "react";

export default function useTruthTable() {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState(null);
    const [error, setError] = useState(null);

    const getTruthTable = (expression) => {
        if (!expression) {
            setTimeout(() => setError(""), 3000);
            return setError("Please enter an expression");
        }

        setLoading(true);
        const url = "http://localhost:3000/api/v1/solve-expression";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ expression }),
        };

        fetch(url, options)
            .then((resp) => resp.json())
            .then((data) => {
                if (data.ok) {
                    setResp(data.data);
                } else {
                    setTimeout(() => setError(""), 4000);
                    setError(data.error);
                }
            })
            .catch(() => setError("An un-expected error occured"))
            .finally(() => setLoading(false));
    };

    return { loading, error, resp, getTruthTable };
}
