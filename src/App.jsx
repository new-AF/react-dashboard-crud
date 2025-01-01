import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Table } from "./Table";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <h1>My CRUD App</h1>
            </header>
            <main>
                <Table demo={true} />
            </main>
        </>
    );
}

export default App;
