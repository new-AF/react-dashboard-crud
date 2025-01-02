import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { Table } from "./Table";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { NewUserForm } from "./NewUserForm";
import { Footer } from "./Footer";

import "./App.css";
import { useEffect } from "react";

function App() {
    const [state, setState] = useState({ isLoading: true, rows: [] });

    useEffect(() => {
        const readDB = async () => {
            try {
                const response = await fetch("/db.json");
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

    const getIds = () => {
        return state.rows.map(({ id }) => id);
    };

    const hasId = (id) => {
        return getIds().includes(id);
    };

    const editUser = (id, passedObj) => {
        const obj = {
            id,
            ...passedObj,
        };

        if (hasId(id) === false) return false;

        const rows = [...state.rows];

        rows[id] = obj;

        setState((prev) => ({
            ...prev,
            rows: rows,
        }));
    };

    const deleteUser = (id) => {
        if (hasId(id) === false) return;

        const rows = state.rows.filter((obj) => obj.id !== id);

        /* set row Id from beginning */
        rows.forEach((obj, index) => {
            obj.id = index + 1;
        });

        setState((prev) => ({
            ...prev,
            rows: rows,
        }));
    };

    const addUser = (passedObj) => {
        const id = state.rows.length + 1;

        const obj = {
            id,
            ...passedObj,
        };

        setState((prev) => ({
            ...prev,
            rows: [...state.rows, obj],
        }));
    };

    return (
        <>
            <Header />
            <main>
                {state.isLoading && <p className="loading">Loading...</p>}
                {state.isLoading === false && (
                    <Table
                        arrayOfObjects={state.rows}
                        actionFunctions={{
                            addUser,
                            deleteUser,
                        }}
                    />
                )}
                <Modal children={<NewUserForm addUser={addUser} />} />
            </main>
            <Footer />
        </>
    );
}

export default App;
