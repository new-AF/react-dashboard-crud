import "./Footer.css";
import { SVG } from "./SVG";

export const Footer = () => {
    return (
        <footer>
            <span>Developed by</span>

            <a
                className="link"
                href="https://github.com/new-AF/react-dashboard-crud"
            >
                <SVG path="/github-brands-solid.svg" /> Abdullah Fatota
            </a>
        </footer>
    );
};
