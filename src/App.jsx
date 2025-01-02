import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Table } from "./Table";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { NewUserForm } from "./NewUserForm";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <main>
                <Table demo={true} />
                <Modal children={<NewUserForm />} />
            </main>
        </>
    );
}

export default App;
