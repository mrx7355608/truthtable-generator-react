import { useState } from "react";
import "./index.css";
import Table from "./Table";
import Note from "./Note";

function App() {
    const [loading, setLoading] = useState(false);
    const [expression, setExpression] = useState("");
    const [resp, setResp] = useState(null);
    const [error, setError] = useState(null);

    const onChangeHandler = (e) => {
        setExpression(e.target.value);
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!expression) {
            return setError("Please enter an expression");
        }

        setLoading(true);
        const res = await fetch(
            "http://localhost:3000/api/v1/solve-expression",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ expression }),
            },
        );
        setLoading(false);
        setExpression("");
        setError(null);
        const results = await res.json();
        setResp(results);
    };

    return (
        <div className="w-1/2 mx-auto font-sans h-screen">
            <h1 className="text-center text-4xl font-black text-indigo-500 pt-12">
                Truth Table Generator
            </h1>
            <p className="mt-5 text-lg text-gray-700 text-center">
                This is a truth table generator. Just enter your expression in
                the box below and get your table within seconds!
            </p>

            <Note />
            <form
                onSubmit={onSubmitHandler}
                className="mt-10 w-full flex justify-center"
            >
                <input
                    className="text-gray-800 border-none bg-gray-200 rounded-lg p-3 outline-none w-3/4"
                    name="expression"
                    placeholder="Enter your expression here"
                    onChange={onChangeHandler}
                    value={expression}
                />
                <button
                    type="sumbit"
                    className="px-4 py-3 text-white bg-indigo-700 rounded-lg ml-2 font-bold"
                >
                    {loading ? (
                        <span className="loading loading-dots loading-md text-gray-200"></span>
                    ) : (
                        "Continue"
                    )}
                </button>
            </form>
            <p className="text-red-600 mt-5">{error}</p>
            {resp && <Table table={resp} />}
        </div>
    );
}

export default App;
