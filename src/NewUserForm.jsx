import { useState } from "react";
import "./NewUserForm.css";

export const NewUserForm = ({ className = "new-user-form", addUser }) => {
    const [state, setState] = useState({ name: "", email: "", tel: "" });

    const setKey = (key, value) => {
        setState((prev) => {
            const obj = { ...prev };
            obj[key] = value;
            return obj;
        });
    };

    const onClick = (event) => {
        addUser({ name: state.name, email: state.email });
    };

    return (
        <form className={className}>
            <fieldset>
                <label htmlFor="name">Enter user's name:</label>
                <input
                    id="name"
                    type="text"
                    value={state.name}
                    onInput={(e) => setKey("name", e.target.value)}
                />
            </fieldset>

            <fieldset>
                <label htmlFor="email">Enter user's email:</label>
                <input
                    id="email"
                    type="email"
                    value={state.email}
                    onInput={(e) => setKey("email", e.target.value)}
                />
            </fieldset>

            {/* <fieldset>
                <label htmlFor="tel">Enter user's contact number:</label>
                <input
                    id="tel"
                    type="tel"
                    value={state.tel}
                    onInput={(e) => setKey("tel", e.target.value)}
                />
            </fieldset> */}

            <input
                type="submit"
                value="Add user"
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            />
        </form>
    );
};
