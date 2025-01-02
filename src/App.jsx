import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Table } from "./Table";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { NewUserForm } from "./NewUserForm";

import "./App.css";
import { useEffect } from "react";

function App() {
    const [state, setState] = useState({ isLoading: true, rows: [] });

    useEffect(() => {
        const readDB = async () => {
            try {
                const response = await fetch("./database/db.json");
                if (response.ok === false) throw new Error(response);
                const json = await response.json();
                console.log(json);
                setState({ rows: json.users, isLoading: false });
            } catch (error) {
                console.error(error);
            }
        };

        setTimeout(readDB, 1000);
    }, []);

    return (
        <>
            <Header />
            <main>
                {state.isLoading && <p className="loading">Loading...</p>}
                {state.isLoading === false && (
                    <Table arrayOfObjects={state.rows} />
                )}
                <Modal children={<NewUserForm />} />
            </main>
        </>
    );
}

export default App;
