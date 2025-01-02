import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Table } from "./Table";
import "./App.css";
import { Header } from "./Header";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <Table demo={true} />
            </main>
        </>
    );
}

export default App;
