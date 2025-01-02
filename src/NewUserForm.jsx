import "./NewUserForm.css";

export const NewUserForm = ({ className = "new-user-form" }) => {
    return (
        <form className={className}>
            <fieldset>
                <label for="name">Enter user's name:</label>
                <input id="name" type="text" />
            </fieldset>

            <fieldset>
                <label for="email">Enter user's email:</label>
                <input id="email" type="email" />
            </fieldset>

            <fieldset>
                <label for="tel">Enter user's contact number:</label>
                <input id="tel" type="tel" />
            </fieldset>

            <input type="submit" value="Add user" />
        </form>
    );
};
